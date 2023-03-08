import React from "react";


export default function MiniCart() {

		return (
			<div>
				<hr className="mt-3 mb-3" />
				<div className="d-flex flex-row align-items-center">
					<div>
						<img
							className="me-3"
							style={{ width: "50px" }}
						
						></img>
					</div>
					<div className="me-auto">
						<div className="fw-bold">A</div>
						<div>Barang</div>
					</div>
					<div className="fw-bold ms-4" style={{ color: "#F96B01" }}>
						Rp 0
					</div>
				</div>
			</div>
		);
}
