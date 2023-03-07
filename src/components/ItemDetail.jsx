import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

import {
	decrementItemOnCart,
	incrementItemOnCart,
	hardDeleteItemFromCart,
} from "../redux/action/action.js";

export default function ItemDetail(props) {
	const dispatch = useDispatch();

	const incrementButtonHandler = () => {
		dispatch(incrementItemOnCart(props.queryData.id));
	};

	const decrementButtonHandler = () => {
		dispatch(decrementItemOnCart(props.queryData.id));
	};

	const hardDeleteHandler = () => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success ms-2",
				cancelButton: "btn btn-danger me-2",
			},
			buttonsStyling: false,
		});

		swalWithBootstrapButtons
			.fire({
				title: "Ingin menghapus dari keranjang?",
				text: "Lorem lorem",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Ya",
				cancelButtonText: "Gak",
				reverseButtons: true,
			})
			.then(result => {
				if (result.isConfirmed) {
					dispatch(hardDeleteItemFromCart(props.queryData.id));
					swalWithBootstrapButtons.fire("Item Dihapus Dari Keranjang.");
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					swalWithBootstrapButtons.fire("Cancelled");
				}
			});
	};
	return (
		<>
			<div className="d-flex flex-row ms-3">
				<div className="d-flex flex-row align-items-center">
					<input
						className="form-check-input me-3"
						type="checkbox"
						value=""
						id={props.queryData.id}
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
				<div className="ms-4 me-3" style={{ color: "#03ac0e" }}>
					Tulis Catatan
				</div>
				<div className="ms-auto" style={{ color: "grey" }}>
					Pindahkan ke wishlist
				</div>
				<div className="ms-2" style={{ color: "grey" }}>
					|
				</div>
				<i
					className="bi bi-trash3 ms-2"
					onClick={() => hardDeleteHandler()}
				></i>
				<div className="d-flex flex-row ms-4 me-1 align-items-center">
					<button
						type="button"
						className="btn btn-link me-2 fw-bold"
						style={{ textDecoration: "none", color: "#03AC0E" }}
						onClick={event => decrementButtonHandler(event)}
					>
						-
					</button>
					{props.queryData.qty}
					<button
						type="button"
						className="btn btn-link ms-2 fw-bold"
						style={{ textDecoration: "none", color: "#03AC0E" }}
						onClick={event => incrementButtonHandler(event)}
					>
						+
					</button>
				</div>
			</div>
		</>
	);
}
