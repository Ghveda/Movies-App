import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isLoggedIn: boolean;
  user: {
    accessToken: string;
    email: string;
    id: number | undefined;
  };
}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: {
    accessToken: "",
    email: "",
    id: undefined,
  },
};

export const userAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, actions) => {
      state.isLoggedIn = true;
      state.user = actions.payload;
    },
    userLogout: (state) => {
      localStorage.removeItem("token");

      state.isLoggedIn = false;
      state.user = {
        id: undefined,
        email: "",
        accessToken: "",
      };
    },
  },
});

export const { userLogin, userLogout } = userAuth.actions;

export default userAuth.reducer;
