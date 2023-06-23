import { UserRegistrationState, UserRegistrationFormData, UserLoginData } from "./userDatagram";
import { BASE_URL } from "../../api/endPoint";
const API_URL = BASE_URL;

export async function createUser(payload: UserRegistrationFormData) {
  const userData = payload.userRegistraionInfo;
  return fetch(`${API_URL}/api/v1/authentication.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userData,
    }),
  })
    .then(response => {
      // console.log(JSON.stringify(response));
      return response.json()
    })
    .catch((error) => {
      console.log("Error: ", error);
      return {} as UserRegistrationState;
    });
}


export async function loginUser(payload: UserLoginData) {
  const user = payload.user;
  return fetch(`${API_URL}/api/v1/posts/${user.id}.json`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
    }),
  })
    .then(response => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as UserRegistrationState;
    });
}
