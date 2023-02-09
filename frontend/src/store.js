import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";

import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

 const reducer = combineReducers({})

 const initialState = {}

 const preloadedState = {}
 
 
// const middleware = [thunk]

// const store = configureStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

const store = configureStore({
    reducer,
    initialState,
    preloadedState,
    middleware: [thunk],
})

export default store
