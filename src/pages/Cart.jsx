import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import CartDetail from "../components/Carts/CartDetail.jsx";


export default function Cart() {

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
					<div>Cart Kosong</div>
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
							<p>0 Barang</p>
							<p className="fw-bold">
								Rp 0
							</p>
						</div>
						<button
							className="btn fw-bold"
							style={{ backgroundColor: "#03ac0e", color: "white" }}
					
						>
							Beli 
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
