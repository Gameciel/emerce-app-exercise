import React from "react";

export default function MiniCart() {
	// 	const globalData = useSelector(state => state);
	// 	return globalData.globalCartData.item.map(value => {
	return (
		<>
			<hr className="mt-3 mb-3" />
			<div className="d-flex flex-row align-items-center">
				<div>
					<img className="me-4" style={{ width: "40px" }} src=""></img>
				</div>
				<div className="me-auto">
					<div className="fw-bold">A</div>
					<div>B Barang</div>
				</div>
				<div className="fw-bold ms-4" style={{ color: "#F96B01" }}>
					Rp 0
				</div>
			</div>
		</>
	);
}
