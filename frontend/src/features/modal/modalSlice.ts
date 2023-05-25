import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  data: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, data: object = {}) => {
      state.isOpen = true;
      state.data = data;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
