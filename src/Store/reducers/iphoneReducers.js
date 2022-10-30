import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";


const initialState = {
    products2: [],
    loading2: false,
    errors: null
}


//* create async request

export const getAlliPhone = createAsyncThunk("iPhone/getAlliPhone", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["mobil-telefonlar", "apple"],
    })
    return Categories.data;
})


const iphoneSlice = createSlice({
    name: "iPhone",
    initialState,
    extraReducers: {
        [getAlliPhone.pending]: (state) => {
            state.loading2 = true
        },

        [getAlliPhone.rejected]: (state, payload) => {
            state.loading2 = false;
            state.errors = payload
        },

        [getAlliPhone.fulfilled]: (state, { payload }) => {
            state.loading2 = false;
            state.products2 = payload
        }
    }
})

export default iphoneSlice.reducer;