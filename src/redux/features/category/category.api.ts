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
    getSingleCategory: builder.query({
      query: (name: string) => ({
        url: `/categories/${name}`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data: TCreateCategory) => ({
        url: "/categories/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    editCategory: builder.mutation({
      query: (payload: {
        categoryId: string;
        data: Partial<TCreateCategory>;
      }) => ({
        url: `/categories/update/${payload.categoryId}`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (categoryId: string) => ({
        url: `/categories/delete/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSingleCategoryQuery,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryAPI;
