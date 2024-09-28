import {createAsyncThunk} from "@reduxjs/toolkit";

export const BASE_URL = 'https://d8e9b0b011566ada.mokky.dev';

export const fetchURL = (param) => fetch(BASE_URL + param)


export const fetchProducts = createAsyncThunk(
    'product',
    async (category) => {
        try {
            const response = await fetchURL(`/products?category=${category}`);
            return await response.json()
        } catch (e) {
            return e
        }
    }
)

export const fetchBasket = createAsyncThunk(
    'fetchBasket',
    async () => {
        try {
            const response = await fetchURL('/basket');
            return await response.json();
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchGetProduct = createAsyncThunk(
    'fetchGetProduct',
    async (id) => {
        try {
            const response = await fetchURL(`/products?id=${id}`);
            return await response.json();
        }
        catch (e) {
            console.log(e)
        }
    }
)

export const fetchGetProductInformation = createAsyncThunk(
    'fetchGetProductInformation',
    async (id) => {
        try {
            const response = await fetchURL(`/products?id=${id}`);
            return await response.json();
        }
        catch (e) {
            console.log(e)
        }
    }
)


