import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = [];

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {

    }
});

export const filterReducer = filterSlice.reducer;