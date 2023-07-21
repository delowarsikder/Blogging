import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { RootState } from '../../app/store';
import { Statuses, getToken } from '../utils';
import { createUserAsync, loginUserAsync } from './authActions';

// initialize userToken from local storage
const userToken = getToken();

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login user
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        state.userToken = payload.userToken;
        state.userInfo = payload.userInfo;
      })
      .addCase(loginUserAsync.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      })

      // create user 
      .addCase(createUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;//registration successfull
      })
      .addCase(createUserAsync.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      })
  }
})

// export const { } = authSlice.actions;
// export const selectUser = (state: RootState) => state;
export default authSlice.reducer;



