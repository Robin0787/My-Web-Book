import { baseApi } from "../../baseApi";

export const WebsiteAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWebsites: builder.query({
      query: () => ({
        url: "/websites",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWebsitesQuery } = WebsiteAPI;
