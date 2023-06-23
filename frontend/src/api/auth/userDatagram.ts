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
  users: RegistrationData[];
  status: string;
}

const initialState: UserRegistrationState = {
  users: [
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
  user: {
    id?: number;
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
  }
}

export interface UserLoginData {
  user: {
    id: number | undefined;
    title: string;
    body: string;
  }
}


