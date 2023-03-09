import React from "react";

/*

// FORM
// Product Name
// Price
// Image URL
// SUBMIT -> tambahkan produk kedalam products.json

// products.json -> daftar data product(bikin dummy sample data)

// data yang ditampilkan di table products baca dari products.

// data product yang di add kedalam cart disimpan di redux

// endpoints:
// endpoint /products -> menampilkan daftar product di dalam products.json
// endpoint /cart -> menampilkan daftar cart yang ada di dalam redux (ada button delete, + qty, - qty)

*/

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers/index.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import AdminPage from "./pages/AdminPage.jsx";
const store = configureStore({ reducer: rootReducer });

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Routes>
						<Route path="/emerce-app-exercise" element={<Main />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/admin" element={<AdminPage />} />
					</Routes>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
