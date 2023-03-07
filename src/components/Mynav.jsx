import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Mynav() {
	const globalData = useSelector(state => state);

	return (
		<nav
			class="navbar navbar-expand-md navbar-light shadow-sm"
			style={{
				backgroundColor: "#fff",
			}}
		>
			<div className="d-flex flex-row align-items-center justify-content-center ms-4">
				<img
					className="px-1 py-1 me-2"
					style={{ width: "37px" }}
					src={require("../assets/mainLogo.png")}
				/>
				<a
					className="navbar-brand"
					href="#"
					style={{
						fontFamily: "Baumans",
						color: "#03ac0e",
						fontWeight: "bold",
						fontSize: "30px",
					}}
				>
					Bukalapak
				</a>
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse justify-content-start"
				id="navbarNavDropdown"
			>
				<ul class="navbar-nav me-3">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Kategori
						</a>
					</li>
				</ul>

				<form className="d-flex col-8 mx-2">
					<div className="input-group">
						<span
							className="input-group-text"
							id="basic-addon1"
							style={{
								backgroundColor: "transparent",
								borderRight: "none",
							}}
						>
							<i className="bi bi-search"></i>
						</span>
						<input
							className="form-control  me-2"
							type="search"
							placeholder="Cari di bukalapak"
							aria-label="Search"
							style={{ borderLeft: "none" }}
						/>
					</div>
				</form>

				<ul class="navbar-nav ms-2 me-1">
					<li className="nav-item dropdown">
						<a
							className="nav-link"
							href="#"
							id="navbarDropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<div>
								<i className="bi bi-cart3" style={{ fontSize: "1em" }}></i>
							</div>
						</a>
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{globalData.globalCartData.itemOnCart}
						</span>
						<div
							style={{
								left: "-170px",
								fontSize: "0.8em",
								width: "max-content",
							}}
							className="dropdown-menu px-3 pb-3 pt-3"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<div className="d-flex flex-row">
								<p className="">
									<b style={{ color: "grey" }}>
										Keranjang ({globalData.globalCartData.itemOnCart})
									</b>
								</p>
								<Link
									style={{
										textDecoration: "none",
										color: "#03ac0e",
									}}
									className="ms-auto fw-bold"
									to="/cart"
								>
									Lihat Sekarang
								</Link>
							</div>
							<RenderMiniCart />
						</div>
					</li>
				</ul>
				<div
					style={{ marginLeft: "auto", flex: "1" }}
					className="d-flex flex-row align-items-center justify-content-center"
				>
					<i
						className="bi bi-person-circle"
						style={{
							fontSize: "1.7em",
							color: "#03ac0e",
						}}
					></i>
					<a href="#" className="nav-link ms-2">
						admin
					</a>
				</div>
			</div>
		</nav>
	);
}

function RenderMiniCart() {
	const globalData = useSelector(state => state);

	return globalData.globalCartData.item.map(value => {
		return (
			<>
				<hr className="mt-3 mb-3" />
				<div className="d-flex flex-row align-items-center">
					<div>
						<img
							className="me-4"
							style={{ width: "40px" }}
							src={value.image}
						></img>
					</div>
					<div className="me-auto">
						<div className="fw-bold">{value.name}</div>
						<div>{value.qty} Barang</div>
					</div>
					<div className="fw-bold ms-4" style={{ color: "#F96B01" }}>
						Rp
						{value.price.toLocaleString("id")}
					</div>
				</div>
			</>
		);
	});
}
