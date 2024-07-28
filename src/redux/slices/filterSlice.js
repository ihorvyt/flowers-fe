import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedFlower: null,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSelectedFlower(state, action) {
            state.selectedFlower = action.payload;
        },
    },
})

export const { setSelectedFlower } = filterSlice.actions;

export default filterSlice.reducer