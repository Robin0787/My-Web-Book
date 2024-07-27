import { TCreateWebsite, TWebsite } from "@/types/types.website";
import { baseApi } from "../../baseApi";

export interface TGetWebsiteProps {
  category: string | undefined;
  page?: number;
}

export const WebsiteAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWebsites: builder.query({
      query: (payload: TGetWebsiteProps) => {
        const searchParams = new URLSearchParams();
        searchParams.append("page", (payload.page || 1).toString());
        if (payload.category) {
          searchParams.append("category", payload.category);
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
    editWebsite: builder.mutation({
      query: (payload: { id: string; data: Partial<TWebsite> }) => ({
        url: `/websites/update/${payload.id}`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["Websites"],
    }),
    deleteWebsite: builder.mutation({
      query: (websiteId: string) => ({
        url: `/websites/delete/${websiteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Websites"],
    }),
  }),
});

export const {
  useGetWebsitesQuery,
  useCreateWebsiteMutation,
  useEditWebsiteMutation,
  useDeleteWebsiteMutation,
} = WebsiteAPI;
