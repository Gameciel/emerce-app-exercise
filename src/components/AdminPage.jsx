import axios from "axios";
import React, { useEffect, useState } from "react";

// Adjust the url when needed
import { API_URL } from "../fake-api/API_URL";

export default function AdminPage() {
	return (
		<>
			<AdminHeader />
			<div className="d-flex flex-row my-5 justify-content-center">
				<AdminBody />
				<AddItemForm />
			</div>
		</>
	);
}

function AdminHeader() {
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center mt-4">
			<div className="alert alert-info px-5 py-3 fw-light" role="alert">
				<h4 className="alert-heading text-center fw-bold mb-4">Admin Page</h4>
				<p className="fw-normal">
					Let's pretend that you're logged in as an admin.
				</p>
				<hr className="my-2" />
				<p className="mb-0 fw-light">
					<i className="bi bi-info-circle"></i> Add, edit*, or remove* item from
					this panel.
				</p>
				* to be added
			</div>
		</div>
	);
}

function AdminBody() {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then(res => setProductList(res.data))
			.catch(err => console.log(err));
	}, []);

	const renderTableFromAPI = () => {
		return productList.map(value => {
			return (
				<li className="list-group-item d-flex flex-row justify-content-between align-items-start pb-4 pt-0">
					<div className="ms-1 me-auto">
						<div className="fw-bold mt-3 mb-2" style={{ fontSize: "0.8em" }}>
							[ ID: {value.id} ]<i className="bi bi-pencil-square ms-2"></i>
							<div style={{ fontSize: "1.1em" }}>{value.name}</div>
						</div>
						<div className="d-flex flex-row">
							<img src={value.image} width={"80px"}></img>
							<div className="d-flex flex-column ms-3">
								<div className="fw-bold">{value.merchant.name}</div>
								<div
									className="fw-light mt-0 mb-2"
									style={{ fontSize: "0.9em" }}
								>
									<i className="bi bi-geo-alt me-1"></i>
									{value.merchant.location}
								</div>
								<div>Item description...</div>
							</div>
						</div>
					</div>
					<span className="badge bg-success rounded-pill my-4 ms-5 py-2 px-3">
						Price: Rp {value.price.toLocaleString("id")}
					</span>
				</li>
			);
		});
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center me-5">
			<ul className="list-group mb-3" style={{ width: "max-content" }}>
				<li className="list-group-item list-group-item-primary py-3 fw-bold text-center">
					Daftar Produk
				</li>
				{renderTableFromAPI()}
			</ul>
			<div className="d-flex flex-row align-items-center my-3">
				<button type="button" className="btn btn-link" disabled>
					{"<"}
				</button>
				<div className="mx-4">Page 1 of 1</div>
				<button type="button" className="btn btn-link" disabled>
					{">"}
				</button>
			</div>
		</div>
	);
}

function AddItemForm() {
	return (
		<div className="ms-5">
			<h2>Add Item:</h2>
			<div class="my-3">
				<label for="inputPrice" class="fw-bold">
					User:
				</label>
				<div class="input-group mb-3">
					<span class="input-group-text" id="basic-addon1">
						@
					</span>
					<input
						type="text"
						class="form-control"
						placeholder="admin"
						aria-label="Username"
						aria-describedby="basic-addon1"
						disabled
					/>
				</div>
			</div>
			<div class="my-3">
				<label for="inputPrice" class="fw-bold">
					Location:
				</label>
				<div class="input-group mb-3">
					<span class="input-group-text" id="basic-addon1">
						<i className="bi bi-geo-alt me-1"></i>
					</span>
					<input
						type="text"
						class="form-control"
						placeholder="Solo"
						aria-label="Username"
						aria-describedby="basic-addon1"
						disabled
					/>
				</div>
			</div>
			<div class="mb-3">
				<label for="inputPrice" class="fw-bold">
					Product Price:
				</label>
				<div class="input-group mb-3">
					<span class="input-group-text" id="basic-addon1">
						Rp
					</span>
					<input
						type="number"
						class="form-control"
						placeholder="Harga"
						aria-label="Harga"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
			<div class="mb-3">
				<label for="inputPrice" class="fw-bold">
					Product Image:
				</label>
				<div class="input-group mb-3">
					<span class="input-group-text" id="basic-addon1">
						URL
					</span>
					<input
						type="url"
						class="form-control"
						placeholder="https://image.source"
						aria-label="Harga"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
			<button type="button" className="btn btn-primary mt-2">
				Add Item
			</button>
		</div>
	);
}
