import React from "react";
import MiniCart from "../Carts/MiniCart";

import { Link } from "react-router-dom";

export default function Mynav(props) {
	return (
		<nav
			className="navbar navbar-expand-md navbar-light shadow-sm"
			style={{
				backgroundColor: "#fff",
			}}
		>
			<div className="d-flex flex-row align-items-center justify-content-center ms-4">
				<img
					className="px-1 py-1 me-2"
					style={{ width: "37px" }}
					src={require("../../assets/mainLogo.png")}
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
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-start"
				id="navbarNavDropdown"
			>
				<ul className="navbar-nav me-3">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Kategori
						</a>
					</li>
				</ul>

				<form className="d-flex mx-2" style={{ width: "50vw" }}>
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

				<ul className="navbar-nav ms-2 me-auto">
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
							0
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
									<b style={{ color: "grey" }}>Keranjang (0)</b>
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
							<MiniCart />
						</div>
					</li>
				</ul>

				<div
					style={{ flex: "1" }}
					className="d-flex flex-row align-items-center justify-content-center"
				>
					<ul className="navbar-nav me-3 ms-5">
						<li className="nav-item active">
							<Link to="/admin">
								<button type="button" className="btn btn-success" href="#">
									Admin page
								</button>
							</Link>
						</li>
					</ul>
					<i
						className="bi bi-person-circle"
						style={{
							fontSize: "1.7em",
							color: "#03ac0e",
						}}
					></i>
					<div href="#" className="nav-link ms-2">
						admin
					</div>
				</div>
			</div>
		</nav>
	);
}
