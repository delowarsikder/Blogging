import { Statuses } from "../utils";

export interface RegistrationData {
  id?: number;
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  created_at?: any;
  updated_at?: any;
}

export interface UserRegistrationState {
  user: RegistrationData[];
  status: string;
}

export const initialState: UserRegistrationState = {
  user: [
    {
      id: undefined,
      first_name: "",
      last_name: "",
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
    first_name: string,
    last_name: string,
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


