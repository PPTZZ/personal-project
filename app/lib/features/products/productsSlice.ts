import { createSlice } from "@reduxjs/toolkit";
import { getLimitedProducts } from "../../services";


const initialState = {
  products: null,
  calories: 0,
  bannedProducts: null,
  isLoading: false,
  error: null as string | null,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLimitedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLimitedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bannedProducts = action.payload;
      })
      .addCase(getLimitedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const productsReducer = productsSlice.reducer;
