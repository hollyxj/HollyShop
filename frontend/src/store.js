import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' 
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
    },
    preloadedState: {
        cart: { cartItems: cartItemsFromStorage },
        userLogin: { userInfo: userInfoFromStorage }
    },
    middleware: [thunk],
})



export default store