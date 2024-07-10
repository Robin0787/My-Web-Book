import { baseApi } from "../../baseApi";
import { TLoginData } from "../../types/types.global";

export const AuthAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: TLoginData) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthAPI;
