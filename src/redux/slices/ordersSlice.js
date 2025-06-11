import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchOrder  =
    createAsyncThunk('fetch/fetchOrders',
        async ({id}) => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_API_KEY}/order/user/${id}`,
                headers: { },
                data : ''
            };

            try {
                const {data} = await axios.request(config);

                return data.body;
            } catch (error) {
                return null;
            }
        })

export const postOrder  =
    createAsyncThunk('order/postOrder',
        async ({token, data}) => {

            console.log(data, token)
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_API_KEY}/order`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: data
            };

            try {
                const {data} = await axios.request(config);

                return data;
            } catch (error) {
                console.error('Error', error);
                return null;
            }
        })

const initialState = {
    orders: []
}

const cartSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // logUser cases
            .addCase(fetchOrder.pending, (state) => {
                state.orders = [];
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.orders = action.payload;
            })
            .addCase(fetchOrder.rejected, (state) => {
                state.orders = [];
            })
    }
})



export const {} = cartSlice.actions;

export default cartSlice.reducer