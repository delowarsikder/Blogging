import { Statuses } from "../utils";

export interface RegistrationData {
  id?: number;
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  created_at?: any;
  updated_at?: any;
}

export interface UserRegistrationState {
  users: RegistrationData[];
  status: string;
}

export const initialState: UserRegistrationState = {
  users: [
    {
      id: undefined,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      created_at: null,
      updated_at: null,
    }
  ],
  status: Statuses.Initial
}

export interface UserRegistrationFormData {
  userRegistrationInfo: {
    id?: number;
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }
}

export interface UserLoginFormData {
  userLoginInfo: {
    email: string;
    password: string;
  }
}


