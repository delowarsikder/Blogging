import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';
import postsReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    modal: modalReducer,
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
