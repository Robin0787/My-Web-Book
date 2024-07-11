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
    }),
  }),
});

export const { useGetWebsitesQuery } = WebsiteAPI;
