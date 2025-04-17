import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //Import from /react
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("accessToken");
    console.log(token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers; // Ensure headers are returned
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
