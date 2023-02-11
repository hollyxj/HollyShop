import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' 
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
 
const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
    },
    preloadedState: {
        cart: { cartItems: cartItemsFromStorage }
    },
    middleware: [thunk],
})



export default store

// --------------------
// import { configureStore, createStore,  combineReducers, appplyMiddleware, applyMiddleware, } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { productListReducer, productDetailsReducer } from "./reducers/productReducers.js";
// import { cartReducer } from "./reducers/cartReducers.js";

// const reducer = combineReducers({
// productList: productListReducer,
// productDetails: productDetailsReducer,
// cart: cartReducer,
// });
// const cartItemsFromStorage = localStorage.getItem("cartItems")
// ? JSON.parse(localStorage.getItem("cartItems"))
// : [];

// const initialState = {
// cart: { cartItems: cartItemsFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(
// reducer,
// initialState,
// composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;