import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import bouquets from './slices/bouqetsSlice.js';
import flowers from './slices/flowersSlice.js';
import cart from './slices/cartSlice.js';
import user from  './slices/userSlice.js'
import orders from './slices/ordersSlice.js';

export const store = configureStore({
    reducer: {
        flowers,
        bouquets,
        filter,
        orders,
        cart,
        user
    },
});
