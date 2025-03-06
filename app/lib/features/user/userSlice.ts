import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    diaryEntries:[],
    bannedProducts:[]
}

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // Add your reducers here
  },
});
