import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  calories: 0,
  bannedProducts: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
  },
});

export const productsReducer = productsSlice.reducer;
