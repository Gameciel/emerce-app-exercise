import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import CartDetailByStore from "../components/Carts/CartDetailByStore";

export default function Cart() {
	const cartData = useSelector(state => state.cart);

	const [itemByStore, setItemByStore] = useState();
	const [isBusy, setBusy] = useState(true);
	const [totalBill, setTotalBill] = useState(0);
	const [totalItem, setTotalItem] = useState(0);

	useEffect(() => {
		setItemByStore(groupItemByStore(cartData));
		setTotalBill(getTotalBill);
		setTotalItem(getTotalItem);
		setBusy(false);
	}, [cartData]);

	const getTotalBill = () => {
		return cartData.reduce((previousValue, currentValue) => {
			return previousValue + currentValue.qty * currentValue.price;
		}, 0);
	};
	const getTotalItem = () => {
		return cartData.reduce((previousValue, currentValue) => {
			return previousValue + currentValue.qty;
		}, 0);
	};

	const RenderItemByStore = () => {
		return Object.keys(itemByStore).map((storeName, index) => {
			return (
				<CartDetailByStore
					key={index}
					storeName={storeName}
					queryData={itemByStore[storeName]}
				/>
			);
		});
	};

	return (
		<>
			<div
				className="container-fluid d-flex flex-row align-items-start justify-content-center pt-5"
				style={{ flexShrink: "1" }}
			>
				<div
					className="d-flex flex-column mt-5 col-5 me-5"
					style={{ minWidth: "max-content" }}
				>
					<div>
						<h4>Keranjang</h4>
						<div className="d-flex flex-row justify-content-between mt-3 ms-1">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									checked
									disabled
								></input>

								<label className="form-check-label" htmlFor="flexCheckDefault">
									Pilih Semua <i className="bi bi-lock-fill"></i>
									<i className="bi bi-emoji-smile"></i>
								</label>
							</div>
							<div style={{ color: "#03ac0e", fontSize: "1.2em" }}>
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										role="switch"
										id="flexSwitchCheckDefault"
									/>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckDefault"
									>
										<i className="bi bi-trash3"></i>
									</label>
								</div>
							</div>
						</div>
						<hr className="my-3" />
					</div>
					{!isBusy && cartData.length ? (
						<RenderItemByStore />
					) : (
						<div>Cart Kosong</div>
					)}
				</div>
				<div
					className="d-flex flex-column mt-5 ms-5 col-2 shadow-sm border border-2 py-3 px-3 rounded"
					style={{ width: "max-content" }}
				>
					<div className="d-flex flex-column align-items-stretch">
						<button className="btn btn-light d-flex justify-content-start align-items-center">
							<i className="bi bi-ticket mx-2 me-3"></i>
							<div
								className="fw-bold me-4"
								style={{
									color: "grey",
									whiteSpace: "nowrap",
									overflow: "hidden",
								}}
							>
								Makin hemat pakai promo
							</div>
							<i className="bi bi-caret-right ms-auto"></i>
						</button>
						<hr></hr>
						<h4>Ringkasan belanja</h4>
						<div className="d-flex flex-row justify-content-between">
							<p>{totalItem} Barang</p>
							<p className="fw-bold">Rp {totalBill.toLocaleString("id")}</p>
						</div>
						<button
							className="btn fw-bold"
							style={{ backgroundColor: "#03ac0e", color: "white" }}
						>
							Beli ({cartData.length})
						</button>
					</div>
				</div>
			</div>
			<div className="container d-flex flex-row align-items-center justify-content-start mt-5">
				<Link to="/emerce-app-exercise">
					<button type="button" className="btn btn-link mt-3">
						{"<"} Kembali ke menu
					</button>
				</Link>
			</div>
		</>
	);
}

const groupItemByStore = rawCartList => {
	return rawCartList.reduce((previousValue, currentValue) => {
		if (previousValue[currentValue.merchant.name]) {
			return {
				...previousValue,
				[currentValue.merchant.name]: [
					...previousValue[currentValue.merchant.name],
					currentValue,
				],
			};
		} else {
			return { ...previousValue, [currentValue.merchant.name]: [currentValue] };
		}
	}, {});
};
