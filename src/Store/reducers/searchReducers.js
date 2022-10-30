import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../Commerce";

const initialState = {
    products: [],
    loading: false,
    errors: null
}


export const searchProducts = createAsyncThunk("search/searchProducts", async (write) => {
    const products = await commerce.products.list({
        query: write,
    });
    return products.data;
})

const searchSlice = createSlice({
    name: "searchProduct",
    initialState,
    extraReducers: {
        [searchProducts.pending]: (state) => {
            state.loading = true
        },

        [searchProducts.rejected]: (state, payload) => {
            state.loading = false;
            state.errors = payload
        },

        [searchProducts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload
        }
    }
})

export default searchSlice.reducer;