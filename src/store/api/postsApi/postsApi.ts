import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IPostParams } from "./postsApi.config";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["posts"],
  endpoints: (build) => ({
    getPosts: build.query<{ totalPosts: string; posts: IPost[] }, IPostParams>({
      query: (params) => ({
        url: `posts`,
        params,
        method: "GET",
      }),
      transformResponse: (baseRes, meta) => {
        const totalPosts = meta?.response?.headers.get(
          "X-Total-Count"
        ) as string;

        return {
          totalPosts: totalPosts ?? "0",
          posts: baseRes as IPost[],
        };
      },
      providesTags: [{ type: "posts", id: "fetchPosts" }],
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
      invalidatesTags: [{ type: "posts", id: "fetchPosts" }],
    }),
    deletePost: build.mutation<void, { id: number }>({
      query: (params) => ({
        url: `posts/${params.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "posts", id: "fetchPosts" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} = postsApi;
