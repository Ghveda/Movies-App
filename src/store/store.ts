import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";
import { authApi } from "./api/authApi";
import userAuthReducer from "./slice/userSlice";
import { postsApi } from "./api/postsApi";

export const store = configureStore({
  reducer: {
    showModal: modalReducer,
    userAuth: userAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, postsApi.middleware),
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
