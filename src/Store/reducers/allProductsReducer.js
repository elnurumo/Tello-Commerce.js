import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";
// import Products from '../../components/Productss/Products';

const initialState = {
    products: [],
    loading: false,
    errors: null
}

//* create async request

export const getAllProducts2 = createAsyncThunk("Products2/getAllProducts2", async (data) => {
    const products = await commerce.products.list(data);
    return products;
    
})

const productsSlice = createSlice({
    name: "AllProduct2",
    initialState,
    extraReducers: {
        [getAllProducts2.pending]: (state) => {
            state.loading = true
        },

        [getAllProducts2.rejected]: (state, payload) => {
            state.errors = payload
            state.loading = false;
        },

        [getAllProducts2.fulfilled]: (state, { payload }) => {
            state.products = payload
            state.loading = false;
        },
    }
})

export default productsSlice.reducer;