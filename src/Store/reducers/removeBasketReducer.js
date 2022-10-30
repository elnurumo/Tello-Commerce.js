import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";

const initialState = {
    productsBas: [],
    loadingBas: false,
    errors: null
}

//* create async request

export const removeBasket = createAsyncThunk("removeBasket/removeBasket", async (id) => {
    const Cart = await commerce.cart.remove(id)
    return Cart;
})

const removeBasketSlice = createSlice({
    name: "remove",
    initialState,

    extraReducers: {
        [removeBasket.pending]: (state) => {
            state.loadingBas = true
        },

        [removeBasket.rejected]: (state, payload) => {
            state.loadingBas = false;
            state.errors = payload
        },

        [removeBasket.fulfilled]: (state, { payload }) => {
            state.loadingBas = false;
            state.productsBas = payload
        }
    }
})

export default removeBasketSlice.reducer;