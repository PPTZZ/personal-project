import { addBannedProducts } from "@/app/actions/actions";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userData: {},
  bannedProducts: [],
  entries: [],
  recomandedCal: 0,
  consummedCal: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => (state.userData = action.payload),
    addEntries: (state, action) => (state.entries = action.payload),
    addRecomandedCal: (state, action) => (state.recomandedCal = action.payload),
    addConsummedCal: (state, action) => (state.consummedCal = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(addBannedProducts.fulfilled, (state, action) => {
      state.bannedProducts = action.payload;
    });
  },
});

export const { addEntries, addRecomandedCal, addConsummedCal } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
