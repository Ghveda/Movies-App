import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPost {
  id: number;
  category: string;
  date: string;
  description: string;
  name: string;
  liked: boolean;
}

export interface IPostParams {
  _page: number;
  _limit?: number;
  category?: string;
  liked?: boolean;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["posts"],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], IPostParams>({
      query: (params) => ({
        url: `posts`,
        params,
        method: "GET",
      }),
    }),
    getPost: build.query<IPost, { id: number }>({
      query: (params) => ({
        url: `posts/${params.id}`,
        method: "GET",
      }),
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (params) => ({
        url: `posts/${params.id}`,
        body: params,
        method: "PUT",
      }),
    }),
    deletePost: build.mutation<void, { id: number }>({
      query: (params) => ({
        url: `posts/${params.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} = postsApi;
