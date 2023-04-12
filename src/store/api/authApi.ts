import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IAuth {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    // TODO: Change type any
    login: build.mutation<any, Partial<IAuth>>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
    }),
    // TODO: Change type any
    register: build.mutation<any, Partial<IAuth>>({
      query: (body) => ({
        url: `register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
