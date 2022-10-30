import { configureStore } from '@reduxjs/toolkit'
import allProductsReducer from './reducers/allProductsReducer'
import BasketReducer from './reducers/BasketReducer'
import aksesuarReducer from './reducers/aksesuarReducer'
import fetchReducers from './reducers/fetchReducers'
import iphoneReducers from './reducers/iphoneReducers'
import productReducer from "./reducers/productReducer"
import removeBasketReducer from './reducers/removeBasketReducer'
import searchReducers from './reducers/searchReducers'
import categories from './reducers/categories'

export const store = configureStore({
    reducer: {
        fetch: fetchReducers,
        product: productReducer,
        aksesuar: aksesuarReducer,
        iPhone: iphoneReducers,
        search: searchReducers,
        Products: allProductsReducer,
        Basket: BasketReducer,
        remove: removeBasketReducer,
        categories: categories,
    },
})