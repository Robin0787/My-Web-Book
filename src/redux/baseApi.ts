/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const baseServerURL = "https://my-web-book.vercel.app/api/v1";
// const baseServerURL = "http://localhost:5000/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl: baseServerURL,
  prepareHeaders: (headers, { getState }) => {
    const token: string | null = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Categories", "Websites"],
});
