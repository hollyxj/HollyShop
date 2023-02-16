import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' 
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer, orderListMyReducer, orderPayReducer } from './reducers/orderReducers'
import { orderDetailsReducer } from './reducers/orderReducers'


const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : null

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdateProfile: userUpdateProfileReducer,
        orderCreate: orderCreateReducer,
        orderDetails: orderDetailsReducer,
        orderPay: orderPayReducer,
        orderListMy: orderListMyReducer,
    },
    preloadedState: {
        cart: { 
            cartItems: cartItemsFromStorage,
            shippingAddress: shippingAddressFromStorage, 
        },
        userLogin: { userInfo: userInfoFromStorage }
    },
    middleware: [thunk],
})



export default store