import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "../utils/Api.js";
import logo from "../UI/Logo.jsx";

const initialState = {
    products: [],
    category: "бургеры",
    loading: false,
    error: false,
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.category = action.payload.name.toLowerCase();
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = false;
            })
    }
})

export const {getProduct, getCategory} = productSlice.actions;

export default productSlice.reducer;