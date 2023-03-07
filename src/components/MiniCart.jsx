import React from "react";
import { useSelector } from "react-redux";

export default function MiniCart() {
	const cartData = useSelector(state => state.cart);

	return cartData.map((item, index) => {
		return (
			<div key={index}>
				<hr className="mt-3 mb-3" />
				<div className="d-flex flex-row align-items-center">
					<div>
						<img
							className="me-3"
							style={{ width: "50px" }}
							src={item.image}
						></img>
					</div>
					<div className="me-auto">
						<div className="fw-bold">{item.name}</div>
						<div>{item.qty} Barang</div>
					</div>
					<div className="fw-bold ms-4" style={{ color: "#F96B01" }}>
						Rp {item.price}
					</div>
				</div>
			</div>
		);
	});
}
