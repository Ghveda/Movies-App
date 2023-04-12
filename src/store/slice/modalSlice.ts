import { createSlice } from "@reduxjs/toolkit";

export interface IModalState {
  showModal: boolean;
  id: number | undefined;
}

const initialState: IModalState = {
  showModal: false,
  id: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, actions) => {
      state.showModal = true;
      state.id = actions.payload.id;
    },
    cancelModal: (state) => {
      state.showModal = false;
      state.id = undefined;
    },
  },
});

export const { cancelModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
