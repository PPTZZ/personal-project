import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [1, 2, 4, 5, 61, 623, 72, 7432],
  calories: 24,
  bannedProducts: [1, 2, 54, 1, 163, 4, 6, 14],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export const productsReducer = productsSlice.reducer;
