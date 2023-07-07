import { BASE_URL } from "../../api/endPoint";
import { UserLoginFormData, UserRegistrationFormData, UserRegistrationState } from "./userInterface";
const API_URL = BASE_URL;

export async function createUser(payload: UserRegistrationFormData) {
  const users = payload.userRegistrationInfo;
  return fetch(`${API_URL}/api/v1/auth/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      users,
    }),
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
  const users=payload.userLoginInfo;
  return fetch(`${API_URL}/api/v1/auth/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      users,
    }),
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
