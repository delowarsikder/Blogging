import { BASE_URL } from "../../api/endPoint";
import { setToken, setTokenExpiration } from "../utils";
import { UserLoginFormData, UserRegistrationFormData, UserRegistrationState } from "./userInterface";
const API_URL = BASE_URL;

export async function createUser(payload: UserRegistrationFormData) {
  const user = payload.userRegistrationInfo;
  return fetch(`${API_URL}/api/v1/registrations`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      console.log(JSON.stringify(response));
      return response.json()
    })
    .catch((error) => {
      console.log("Error: ", error);
      return {} as UserRegistrationState;
    });
}

export async function loginUser(payload: UserLoginFormData) {
  const user = payload.user;
  let valid = false;
  try {
    const response = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    var loginResult = await response.json();
    console.log("responseData: ", response);
    valid = loginResult.success && loginResult.auth_token != null;

  } catch (except) {
    valid = false;
  }
  if (!valid) {
    if (
      loginResult &&
      loginResult.error &&
      loginResult.error.user_authentication
    )
      return {
        valid: false,
        message: loginResult.error.user_authentication,
      };

    return {
      valid: false,
      message: "Something unexpected happened",
    };
  }
  setToken(loginResult.auth_token);
  setTokenExpiration(loginResult.token_expiration);

  return loginResult;

}





// export async function loginUser(payload: UserLoginData) {
//   const user = payload.user;
//   return fetch(`${API_URL}/api/v1/posts/${user.id}.json`, {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user,
//     }),
//   })
//     .then(response => response.json())
//     .catch((error) => {
//       console.log("Error: ", error);
//       return {} as UserRegistrationState;
//     });
// }
