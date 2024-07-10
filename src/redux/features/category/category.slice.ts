import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialCategoryState = {
  value: undefined | string;
};

const initialState: TInitialCategoryState = {
  value: 'home',
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;

export const selectCurrentCategory = (state: RootState) => state.category.value;
