import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { RootState } from '../../app/store';
import { Statuses } from '../utils';
import { createUserAsync, loginUserAsync } from './authActions';
import { stat } from 'fs';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

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
        state.userInfo = payload;
        state.userToken = payload.userToken;
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

export const { } = authSlice.actions;
export default authSlice.reducer;


