import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entryList:[]
}

const entrySlice = createSlice({
    name:'entrySlice',
    initialState,
    reducers:{}
})

export const entryReducer = entrySlice.reducer;