import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBouquet = createAsyncThunk('bouquet/fetchFilterFlowers', async () => {
    try {
        const {data} = await axios.get("http://localhost:8083/api/v1/products/bouquets");
        const bouquets = data;

        if (bouquets.length === 0) {
            return "Empty bouquets";
        }

        return bouquets;
    }
    catch (e) {
        console.error("Error fetching bouquets:", e);
        return []
    }
})

const initialState = {
    bouquets: [],
}

const flowersSlice = createSlice({
    name: "bouquets",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBouquet.pending, (state) => {
                state.bouquets = [];
            })
            .addCase(fetchBouquet.fulfilled, (state, action) => {
                state.bouquets = action.payload;
            })
            .addCase(fetchBouquet.rejected, (state) => {
                state.bouquets = [];
            })
    }
})

export const {  } = flowersSlice.actions;

export default flowersSlice.reducer