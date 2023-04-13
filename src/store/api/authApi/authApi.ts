import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth, IAuthResponse } from "./authApi.config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.mutation<IAuthResponse, Partial<IAuth>>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
    }),
    register: build.mutation<IAuthResponse, Partial<IAuth>>({
      query: (body) => ({
        url: `register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
