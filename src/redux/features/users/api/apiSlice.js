import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3009",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    createUser: builder.mutation({
      query: (name) => ({url:"users",method:"POST",body:{name}}),
    }),
  }),
});
export const { useGetUsersQuery, useCreateUserMutation  } = apiSlice;
