import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ItemDetail from "./ItemDetail";

export default function CartDetailByStore(props) {
	const RenderItem = () =>
		props.queryData.map(item => <ItemDetail queryData={item} />);

	return (
		<div className="d-flex flex-column justify-content-start">
			<div className="d-flex flex-row justify-content-start mb-3">
				<div className="form-check d-flex align-items-center">
					<input
						className="form-check-input me-2"
						type="checkbox"
						value=""
						id="flexCheckDefault"
						checked
						disabled
					/>
					<div className="d-flex flex-column align-items-start ms-1">
						<label
							className="form-check-label fw-bold mt-1"
							htmlFor="flexCheckDefault"
							style={{ fontSize: "0.8em" }}
						>
							{props.queryData[0].merchant.status === "Pro Merchant" ? (
								<i className="bi bi-bookmark-check me-1 mb-0"></i>
							) : (
								<i className="bi bi-award me-1 mb-0"></i>
							)}
							{props.storeName}
						</label>
						<div style={{ fontSize: "0.8em" }}>
							<i className="bi bi-geo-alt-fill me-1"></i>
							{props.queryData[0].merchant.location}
						</div>
					</div>
				</div>
			</div>
			<RenderItem />
		</div>
	);
}

// const getMerchantDataFromDatabase = (merchantData, merchantID) => {
// 	return {
// 		name: merchantData[merchantID].name,
// 		status: merchantData[merchantID].status,
// 		location: merchantData[merchantID].location,
// 	};
// };
