import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlowers = createAsyncThunk('flowers/fetchFilterFlowers', async () => {
    try {
        const {data} = await axios.get("http://localhost:8083/api/v1/products/flowers");
        const flowers = data.body;

        if (flowers.length === 0) {
            return "Empty flowers";
        }

        return flowers;
    }
    catch (e) {
        console.error("Error fetching flowers:", e);
        return []
    }
})

const initialState = {
    flowers: [],
}

const flowersSlice = createSlice({
    name: "flowers",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlowers.pending, (state) => {
                state.flowers = [];
            })
            .addCase(fetchFlowers.fulfilled, (state, action) => {
                state.flowers = action.payload;
            })
            .addCase(fetchFlowers.rejected, (state) => {
                state.flowers = [];
            })
    }
})

export const {  } = flowersSlice.actions;

export default flowersSlice.reducer