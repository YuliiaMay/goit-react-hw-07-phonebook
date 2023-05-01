import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, {payload}) {
            return (state = payload);
        },
    }
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;