import { RootState } from "@/redux/store";
import { TCategory } from "@/types/types.category";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialCategoryState = {
  value: undefined | TCategory;
};

const initialState: TInitialCategoryState = {
  value: undefined,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<TCategory>) => {
      state.value = action.payload;
    },
    clearCategory: (state) => {
      state.value = undefined;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export default categorySlice.reducer;

export const selectCurrentCategory = (state: RootState) => state.category.value;
