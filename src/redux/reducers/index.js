import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartData";

export const rootReducer = combineReducers({
	cart: cartReducer,
});
