import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  diaryEntries: [],
  bannedProducts: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
