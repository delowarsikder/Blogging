import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { UserRegistrationFormData } from './userDatagram';
import { createUser } from './authAPI';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

export const createPostAsync = createAsyncThunk(
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
})
export const { } = authSlice.actions;
export default authSlice.reducer;

