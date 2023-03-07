import React from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

const store = configureStore({ reducer: rootReducer });

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="cart" element={<Cart />} />
					</Routes>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
