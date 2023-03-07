import { combineReducers } from "@reduxjs/toolkit";
import { appSettingReducer } from "./appSetting";
import { cartReducer } from "./cartData";
import { merchantReducer } from "./merchantData";

export const rootReducer = combineReducers({
	cart: cartReducer,
	merchant: merchantReducer,
	appSetting: appSettingReducer,
});
