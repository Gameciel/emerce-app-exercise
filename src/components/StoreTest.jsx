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

	const renderMain = () => {
		return staticItems.map(value => {
			return (
				<div className="card px-2 py-2 mx-5 mt-5" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={value.image}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h4 className="card-title mb-4">{value.name}</h4>
						<h5 className="card-title">
							{merchantData[value.merchantID].status === "Power Merchant" ? (
								<i className="bi bi-award me-1"></i>
							) : (
								<i className="bi bi-bookmark-star me-1"></i>
							)}
							{merchantData[value.merchantID].name}
						</h5>
						<p className="card-title mt-0 mb-4">
							{merchantData[value.merchantID].location}
						</p>
						<p className="card-text mb-4">
							Rp {value.price.toLocaleString("id")}
						</p>
						<button
							onClick={() => dispatch(addItemToCart(value, value.id))}
							type="btn"
							className="btn btn-success"
						>
							Tambah Barang Ke Keranjang
						</button>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="container d-flex flex-row mt-5 align-items-center justify-content-center">
			{renderMain()}
		</div>
	);
}
