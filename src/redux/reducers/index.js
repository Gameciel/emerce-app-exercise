import { combineReducers } from "@reduxjs/toolkit";
import { appSettingReducer } from "./appSetting";

import { cartReducer } from "./cartData";

export const rootReducer = combineReducers({
	cart: cartReducer,
	appSetting: appSettingReducer,
});
