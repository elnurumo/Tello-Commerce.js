import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";


const initialState = {
    products1: [],
    loading1: false,
    errors: null
}


//* create async request

export const getAllAksesuar = createAsyncThunk("Aksesuar/getAllAksesuar", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["aksessuarlar"],
    })
    return Categories.data;
})


const aksesuarSlice = createSlice({
    name: "Aksesuar",
    initialState,
    extraReducers: {
        [getAllAksesuar.pending]: (state) => {
            state.loading1 = true
        },

        [getAllAksesuar.rejected]: (state, payload) => {
            state.loading1 = false;
            state.errors = payload
        },

        [getAllAksesuar.fulfilled]: (state, { payload }) => {
            state.loading1 = false;
            state.products1 = payload
        }
    }
})

export default aksesuarSlice.reducer;