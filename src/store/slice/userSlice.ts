import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

const initialState: IAuthState = {
  isLoggedIn: false,
  accessToken: "",
  user: {
    email: "",
    id: 1,
  },
};

export const userAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, actions) => {
      state = actions.payload;
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { userLogin, userLogout } = userAuth.actions;

export default userAuth.reducer;
