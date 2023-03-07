import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartData";
import { merchantReducer } from "./merchantData";

export const rootReducer = combineReducers({
	cart: cartReducer,
	merchant: merchantReducer,
});
