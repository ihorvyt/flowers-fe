import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.items.reduce((sum, cur) => sum + (cur.price * cur.count), 0)
        },
        changeItemCount(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.itemId)

            if(action.payload.add) {
                findItem.count++;
            } else {
                findItem.count--;
            }

            state.totalPrice = state.items.reduce((sum, cur) => sum + (cur.price * cur.count), 0)
        }
    }
})



export const { addItemToCart, changeItemCount } = cartSlice.actions;

export default cartSlice.reducer