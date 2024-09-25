import {createSlice} from "@reduxjs/toolkit";
import {fetchBasket, fetchGetProduct} from "../utils/Api.js";


const initialState = {
    basket: [],
    counter: 0,
    order: false,
    result: 0
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addActiveOrder: (state) => {
            state.order = !state.order
        },
        removeActiveOrder: (state) => {
            state.order = !state.order
        },
        basketCounter(state, action) {
            state.counter = action.payload.length;
        },
        basketResult(state, action) {
            state.result = action.payload.reduce((current, product) => current + product.price, 0);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.basket = action.payload;
            })
            .addCase(fetchGetProduct.fulfilled, (state, action) => {
                state.basket.push(action.payload[0]);
            })
    }
})

export const {basketCounter, basketResult, addActiveOrder, removeActiveOrder} = basketSlice.actions;

export default basketSlice.reducer