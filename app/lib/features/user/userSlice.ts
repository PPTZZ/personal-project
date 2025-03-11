import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    bannedProducts: [],
    recomandedKcal: 0,
    age: 0,
    height: 0,
    weight: 0,
    desiredWeight: 0,
  },
  diaryEntries: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      return { ...state, ...action.payload };
    },
    setDiaryEntries(state, action) {
      state.diaryEntries = action.payload;
    },
  },
});
export const { setUserDetails, setDiaryEntries } = userSlice.actions;
export const userReducer = userSlice.reducer;
