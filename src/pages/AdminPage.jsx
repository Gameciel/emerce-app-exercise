import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Adjust the url when needed
import { API_URL } from "../fake-api/API_URL";

export default function AdminPage() {
	return (
		<div>
			<Link to="/emerce-app-exercise">
				<button type="button" className="btn btn-primary ms-4 mt-4">
					{"<"} Return to main
				</button>
			</Link>

			<AdminHeader />
			<div className="d-flex flex-row my-5 justify-content-center">
				<AdminBody />
				<AddItemForm />
			</div>
		</div>
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
	const [page, setPage] = useState(1);
	const [pageEnd, setPageEnd] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(3);

	useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then(res => {
				setPageEnd(Math.ceil(res.data.length / itemPerPage));
				setProductList(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const renderTableFromAPI = () => {
		const paginated = productList.slice(
			(page - 1) * itemPerPage,
			page * itemPerPage
		);
		return paginated.map(value => {
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
				<button
					type="button"
					className="btn btn-link"
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
				>
					{"<"}
				</button>
				<div className="mx-4">
					Page {page} of {pageEnd}
				</div>
				<button
					type="button"
					className="btn btn-link"
					onClick={() => setPage(page + 1)}
					disabled={page === pageEnd}
				>
					{">"}
				</button>
			</div>
		</div>
	);
}

function AddItemForm() {
	const [userInput, setUserInput] = useState({
		name: "",
		price: "",
		image: "https://picsum.photos/200/200",
		merchant: {
			name: "Admin",
			status: "Admin",
			location: "Solo",
		},
	});

	const handleSubmitButton = () => {
		axios
			.post(`${API_URL}/products`, userInput)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<form
			className="needs-validation mx-2 px-4 py-4 border rounded"
			style={{ height: "max-content" }}
		>
			<h2>
				<small class="text-muted mx-4">Add product to database</small>
			</h2>
			<div class="my-3">
				<label for="inputUser" class="fw-bold">
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
						aria-label="inputUser"
						id="inputUser"
						aria-describedby="basic-addon1"
						disabled
					/>
				</div>
			</div>
			<div class="my-3">
				<label for="inputLocation" class="fw-bold">
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
						aria-label="inputLocation"
						aria-describedby="basic-addon1"
						id="inputLocation"
						disabled
					/>
					<div class="invalid-feedback">Harus diisi.</div>
				</div>
			</div>
			<div class="my-3">
				<label for="inputName" class="fw-bold">
					Product name:
				</label>
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Nama produk"
						aria-label="ProductName"
						aria-describedby="basic-addon1"
						id="inputName"
						onChange={e => setUserInput({ ...userInput, name: e.target.value })}
						required
					/>
					<div class="invalid-feedback">Please choose a username.</div>
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
						id="inputPrice"
						onChange={e =>
							setUserInput({ ...userInput, price: e.target.value })
						}
						required
					/>
					<div class="invalid-feedback">Harus diisi</div>
				</div>
			</div>
			<div class="mb-3">
				<label for="inputImage" class="fw-bold">
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
						value="https://picsum.photos/200/200"
						aria-label="Harga"
						aria-describedby="basic-addon1"
						id="inputImage"
						onChange={e =>
							setUserInput({ ...userInput, image: e.target.value })
						}
						required
					/>
					<div class="invalid-feedback">Please choose a username.</div>
				</div>
			</div>
			<button
				className="btn btn-primary mt-2"
				onClick={() => handleSubmitButton()}
				type="submit"
			>
				Add Item
			</button>
		</form>
	);
}
