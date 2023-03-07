import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemDetail from "./ItemDetail";

export default function CartDetail(props) {
	const merchantData = useSelector(state => state.merchant);

	const [merchantName, setMerchantName] = useState(
		getMerchantDataFromDatabase(merchantData, props.merchantID).name
	);
	const [merchantStatus, setMerchantStatus] = useState(
		getMerchantDataFromDatabase(merchantData, props.merchantID).status
	);
	const [merchantLocation, setMerchantLocation] = useState(
		getMerchantDataFromDatabase(merchantData, props.merchantID).location
	);

	const renderItemDetail = () => {
		return props.queryData.map((data, index) => {
			return <ItemDetail key={index} queryData={data} />;
		});
	};

	return (
		<div className="d-flex flex-column justify-content-start">
			<div className="d-flex flex-row justify-content-start mb-3">
				<div className="form-check d-flex align-items-center">
					<input
						className="form-check-input me-2"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<div className="d-flex flex-column align-items-start ms-1">
						<label
							className="form-check-label fw-bold mt-1"
							htmlFor="flexCheckDefault"
							style={{ fontSize: "0.8em" }}
						>
							{merchantName} ({merchantStatus})
						</label>
						<div style={{ fontSize: "0.8em" }}>{merchantLocation}</div>
					</div>
				</div>
			</div>
			{renderItemDetail()}
		</div>
	);
}

const getMerchantDataFromDatabase = (merchantData, merchantID) => {
	return {
		name: merchantData[merchantID].name,
		status: merchantData[merchantID].status,
		location: merchantData[merchantID].location,
	};
};
