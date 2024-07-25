import { TCreateWebsite } from "@/types/types.website";
import { baseApi } from "../../baseApi";

export const WebsiteAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWebsites: builder.query({
      query: (category: string | undefined) => {
        const searchParams = new URLSearchParams();
        if (category) {
          searchParams.append("category", category);
        }
        return {
          url: "/websites",
          method: "GET",
          params: searchParams,
        };
      },
      providesTags: ["Websites"],
    }),
    createWebsite: builder.mutation({
      query: (data: TCreateWebsite) => ({
        url: "/websites/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Websites"],
    }),
  }),
});

export const { useGetWebsitesQuery, useCreateWebsiteMutation } = WebsiteAPI;
