import { TCreateCategory } from "@/types/types.category";
import { baseApi } from "../../baseApi";

export const CategoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),
    createCategory: builder.mutation({
      query: (data: TCreateCategory) => ({
        url: "/categories/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } = CategoryAPI;
