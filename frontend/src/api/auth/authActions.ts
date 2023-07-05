import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserRegistrationFormData, UserLoginFormData } from './userInterface';
import { createUser,loginUser } from './authAPI';

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (payload: UserRegistrationFormData, { rejectWithValue }) => {
    try {
      const response = await createUser(payload);
      console.log(response);
      return response;
    }
    catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (payload: UserLoginFormData, { rejectWithValue }) => {
    try {
      const response = await loginUser(payload);
      console.log(response);
      return response;
    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

