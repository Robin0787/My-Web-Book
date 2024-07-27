import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialCategoryState = {
  value: number;
};

const initialState: TInitialCategoryState = {
  value: 1,
};

const paginationSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    previousPage: (state) => {
      if (state.value > 1) {
        state.value = state.value - 1;
      }
    },
    nextPage: (state) => {
      state.value = state.value + 1;
    },
  },
});

export const { previousPage, setPage, nextPage } = paginationSlice.actions;

export default paginationSlice.reducer;

export const selectCurrentPage = (state: RootState) => state.pagination.value;
