import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authReducer from '../api/auth/authSlice';
import postsReducer from '../api/post/postSlice';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
