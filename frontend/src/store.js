import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' 
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
 
const cartItemsFromStorage = 
    localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer
    },
    preloadedState: {cartItemsFromStorage},
    middleware: [thunk],
})



export default store