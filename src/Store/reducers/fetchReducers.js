import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from "../../Commerce";


const initialState = {
    products: [],
    loading: false,
    errors: null
}


//* create async 

export const getBestSellers =
    async (setLoading, setProducts) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({
                limit: 50,
            });
            let currentIndex = response.data.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [response.data[currentIndex], response.data[randomIndex]] = [
                    response.data[randomIndex], response.data[currentIndex]];
            }
            setProducts(response.data)
            setLoading(false)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }

export const getAllProducts = createAsyncThunk("Products/getAllProducts", async () => {
    const products = await commerce.products.list();
    return products.data;
})


const fetchSlice = createSlice({
    name: "AllProduct",
    initialState,
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true
        },

        [getAllProducts.rejected]: (state, payload) => {
            state.loading = false;
            state.errors = payload
        },

        [getAllProducts.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            state.products = payload
        }
    }
})

export default fetchSlice.reducer;