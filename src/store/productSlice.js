import {createSlice} from "@reduxjs/toolkit";
import {fetchGetProductInformation, fetchProducts} from "../utils/Api.js";

const initialState = {
    products: [],
    product: null,
    category: "бургеры",
    loading: false,
    error: false,
    active: false
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.category = action.payload.name.toLowerCase();
        },
        addProductInformation: (state) => {
            state.active = true;
        },
        removeProductInformation: (state) => {
            state.active = false;
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
            .addCase(fetchGetProductInformation.fulfilled, (state, action) => {
                state.active = true;
                state.product = state.products.filter(item => item.id === action.payload[0].id);
            })
    }
})

export const {addProductInformation, removeProductInformation, getCategory} = productSlice.actions;

export default productSlice.reducer;