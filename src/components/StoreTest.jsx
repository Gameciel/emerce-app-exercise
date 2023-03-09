import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/action/action";

export default function StoreTest() {
	const dispatch = useDispatch();
	const merchantData = useSelector(state => state.merchant);

	const [staticItems, setStaticItems] = useState([
		{
			id: 4,
			merchantID: 1,
			name: "Item D",
			price: 155000,
			qty: 1,
			image:
				"https://i.etsystatic.com/6891259/r/il/2cfed6/2965077259/il_794xN.2965077259_3570.jpg",
			note: "",
		},
		{
			id: 5,
			merchantID: 2,
			name: "Item E",
			price: 165000,
			qty: 1,
			image:
				"https://i.etsystatic.com/iap/55c7ab/4521497480/iap_640x640.4521497480_4brrs39z.jpg?version=0",
			note: "",
		},
	]);

	return (
		<div className="container d-flex flex-row mt-5 align-items-center justify-content-center">
			{renderMain()}
		</div>
	);
}
