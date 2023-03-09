import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrementByOne,
	incrementByOne,
	hardDeleteItem,
} from "../../redux/action/action";

export default function ItemDetail(props) {
	const dispatch = useDispatch();
	const appSetting = useSelector(state => state.appSetting);

	return (
		<>
			<div className="d-flex flex-row ms-3">
				<div className="d-flex flex-row align-items-center">
					<input
						className="form-check-input me-3"
						type="checkbox"
						value=""
						checked
						disabled
					/>
					<img
						style={{ width: "65px", height: "65px" }}
						src={props.queryData.image}
					/>
				</div>
				<div className="d-flex flex-column ms-3">
					<div>{props.queryData.name}</div>
					<div className="fw-bold" style={{ fontSize: "0.9em" }}>
						Rp {props.queryData.price.toLocaleString("id")}
					</div>
				</div>
			</div>
			<div className="d-flex flex-row align-items-center justify-content-end ms-3 mt-3 mb-4 mx-1 pb-3 border-bottom border-3">
				<div className="d-flex flex-row align-items-center me-auto">
					<div className="ms-4 me-3" style={{ color: "#03ac0e" }}>
						Tulis Catatan
					</div>
					<div className="me-auto" style={{ color: "grey", fontSize: "0.9em" }}>
						Catatan:
					</div>
				</div>
				<div className="d-flex flex-row align-items-center">
					{appSetting.deleteMode ? (
						<i
							onClick={() => dispatch(hardDeleteItem(props.queryData.id))}
							style={{ color: "red" }}
							className="bi bi-trash3"
						></i>
					) : (
						<>
							<div className="ms-auto" style={{ color: "grey" }}>
								Pindahkan ke wishlist
							</div>
							<div className="ms-3" style={{ color: "grey" }}>
								|
							</div>
						</>
					)}

					<div className="d-flex flex-row ms-4 me-1 align-items-center">
						<button
							type="button"
							className="btn btn-link me-2 fw-bold"
							style={{ textDecoration: "none", color: "#03AC0E" }}
							onClick={() => dispatch(decrementByOne(props.queryData.id))}
							disabled={appSetting.deleteMode}
						>
							-
						</button>
						{props.queryData.qty}
						<button
							type="button"
							className="btn btn-link ms-2 fw-bold"
							style={{ textDecoration: "none", color: "#03AC0E" }}
							onClick={() => dispatch(incrementByOne(props.queryData.id))}
							disabled={appSetting.deleteMode}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
