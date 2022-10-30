import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";
// import * as api from '../../components/api/https'


const initialState = {
    categories: [],
    loading: false,
    errors: null
}


//* create async request

export const getAllAksesuar = createAsyncThunk("categories/getAllAksesuar", async (catId) => {
    const Categories = await commerce.products.list({
        category_slug: ["aksessuarlar"],
    })
    return Categories.data;
})

// export const getCategories = createAsyncThunk('categories/fetchCategories', async () => {
//     try {
//         const result = await api.getAllCategories(3);

//         return result.data.data
//     } catch (error) {
//         if (!error.response) {
//             throw error
//         }
//     }
// })



const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getAllAksesuar.pending]: (state) => {
            state.loading = true
        },

        [getAllAksesuar.rejected]: (state, payload) => {
            state.loading = false;
            state.errors = payload
        },

        [getAllAksesuar.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.categories = payload
        },
    }
})

export default categoriesSlice.reducer;