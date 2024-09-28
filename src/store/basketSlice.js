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
        basketCounter(state) {
            state.counter = state.basket.reduce((current, product) => current + product.count, 0);
        },
        basketResult(state, action) {
            state.result = action.payload.reduce((current, product) => current + (product.price * product.count), 0);
        },
        addCountProduct: (state, action) => {
            state.basket.filter(item => item.id === action.payload.id ? item.count++ : item.count)
        },
        removeCountProduct: (state, action) => {

            state.basket.filter(item => {
                if (item.id === action.payload.id) item.count--

                item.count <= 0 ? state.basket = state.basket.filter(item => item.id !== action.payload.id) : ''
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.basket = action.payload;
            })
            .addCase(fetchGetProduct.fulfilled, (state, action) => {
                const checkBucket = state.basket.filter(item => item.id === action.payload[0].id);

                checkBucket.length === 0 ? state.basket.push({...action.payload[0], count: 1})
                    :
                    state.basket.filter(item => item.id === action.payload[0].id ? item.count++ : item.count)
            })
    }
})

export const {
    basketCounter,
    basketResult,
    addActiveOrder,
    removeActiveOrder,
    addCountProduct,
    removeCountProduct,
} = basketSlice.actions;

export default basketSlice.reducer