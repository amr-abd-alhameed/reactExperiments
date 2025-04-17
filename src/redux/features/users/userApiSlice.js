import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/getUsers",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApiSlice;
