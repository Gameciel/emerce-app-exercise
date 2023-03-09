import React, { useEffect, useState } from "react";

import axios from "axios";

import { API_URL } from "../fake-api/API_URL.js";

export default function MainMenu() {
	// const dispatch = useDispatch()

	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then(res => {
				setItems(res.data);
				console.log(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const RenderMain = () => {
		return items.map(item => {
			return (
				<div className="card px-2 py-2 mx-5 mt-5" style={{ width: "20rem" }}>
					<span className="position-absolute top-0 start-100 px-3 py-2 translate-middle badge rounded-pill bg-danger">
						<b style={{ fontSize: "1.3em" }}>0%</b> Off
					</span>
					<img
						className="card-img-top"
						src={item.image}
						alt="Card image cap"
						style={{ width: "302px", height: "302px" }}
					/>
					<div className="card-body">
						<h5 className="card-title mb-4">{item.name}</h5>
						<h6 className="card-title">
							{item.merchant.status === "Pro Merchant" ? (
								<i className="bi bi-bookmark-check me-1 mb-0"></i>
							) : (
								<i className="bi bi-award me-1 mb-0"></i>
							)}

							{item.merchant.name}
						</h6>
						<p className="card-title mt-0 mb-4">
							<i className="bi bi-geo-alt"></i>
							{item.merchant.location}
						</p>
						<span className="badge bg-primary rounded-pill mb-4">
							Rp {item.price.toLocaleString("id")} / pc
						</span>
						<span className="badge bg-secondary rounded-pill ms-2 mb-4">
							Stock: <i className="bi bi-infinity"></i>
						</span>
						{/* <p className="card-text mb-4"></p> */}
						<button type="btn" className="btn btn-success ms-auto me-auto">
							Tambah Barang Ke Keranjang
						</button>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="container pb-5">
			<div
				class="alert alert-dark alert-dismissible fade show mt-5"
				role="alert"
			>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<h4 className="alert-heading">Data sample</h4>
					<button
						type="button"
						className="btn-close me-2"
						data-bs-dismiss="alert"
						aria-label="Close"
					></button>
				</div>
				<hr />
				<p className="mb-0">Edit data on: src/fake-api</p>
			</div>

			<div className="d-flex flex-row flex-wrap align-items-center">
				<RenderMain />
			</div>
		</div>
	);
}
