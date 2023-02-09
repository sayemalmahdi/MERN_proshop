import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/ProductReducers'

 const reducer = combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
 })

 const initialState = {}

// const middleware = [thunk]

// const store = configureStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

const store = configureStore({
    // reducer: {},
    reducer,
    initialState,
    preloadedState: {},
    middleware: [thunk],
    });

export default store
