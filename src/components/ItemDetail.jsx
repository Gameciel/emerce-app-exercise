import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

import {
	decrementItemOnCart,
	incrementItemOnCart,
	hardDeleteItemFromCart,
	toggleNoteSetting,
	toggleDeleteMode,
	modifyNote,
} from "../redux/action/action.js";

export default function ItemDetail(props) {
	const appSetting = useSelector(state => state.appSetting);

	const dispatch = useDispatch();

	const [getUserInput, setUserInput] = useState("");

	useEffect(() => {
		setUserInput("");
	}, [appSetting]);

	useEffect(() => {
		return dispatch(toggleDeleteMode(false));
	}, []);

	const incrementButtonHandler = () => {
		dispatch(incrementItemOnCart(props.queryData.id));
	};

	const decrementButtonHandler = () => {
		dispatch(decrementItemOnCart(props.queryData.id));
	};

	const noteSettingHandler = (param, string, itemID) => {
		dispatch(toggleNoteSetting(param));
		if (itemID && !string) {
			dispatch(modifyNote(param, "", itemID));
		} else {
			dispatch(modifyNote(param, string, itemID));
		}
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
				title: `Ingin menghapus <b>${props.queryData.name}</b> dari keranjang?`,
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
				{props.queryData.id === appSetting.addNote ? (
					<div className="d-flex flex-row">
						<input
							className="form-control form-control-sm me-2"
							type={"text"}
							placeholder="Tulis Catatan"
							onChange={e => setUserInput(e.target.value)}
						></input>
						<button
							onClick={() => noteSettingHandler(0)}
							className="btn btn-danger me-1"
						>
							Batal
						</button>
						<button
							onClick={() =>
								noteSettingHandler(0, getUserInput, props.queryData.id)
							}
							className="btn btn-primary"
						>
							Ok
						</button>
					</div>
				) : (
					<div
						className="ms-4 me-3"
						style={{ color: "#03ac0e" }}
						onClick={() => noteSettingHandler(props.queryData.id)}
					>
						Tulis Catatan
					</div>
				)}

				{props.queryData.note ? (
					<div className="me-4" style={{ color: "grey", fontSize: "0.9em" }}>
						Catatan: {props.queryData.note}
					</div>
				) : null}
				{appSetting.deleteMode ? (
					<i
						style={{ color: "red" }}
						className="bi bi-trash3 ms-auto"
						onClick={() => hardDeleteHandler()}
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
