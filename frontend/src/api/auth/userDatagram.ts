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

const initialState: UserRegistrationState = {
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
  userRegistraionInfo: {
    id?: number;
    firstName?: string,
    lastName?: string,
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


