import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";
import basketSlice from "./basketSlice.js";

export const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice,
    }
});