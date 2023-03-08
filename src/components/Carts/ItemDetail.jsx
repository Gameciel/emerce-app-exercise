import React, { useEffect, useState } from "react";

export default function ItemDetail(props) {

	return (
		<>
			<div className="d-flex flex-row ms-3">
				<div className="d-flex flex-row align-items-center">
					<input
						className="form-check-input me-3"
						type="checkbox"
						value=""
					
						checked
						disabled
					/>
					<img
						style={{ width: "65px", height: "65px" }}
						src=""
					/>
				</div>
				<div className="d-flex flex-column ms-3">
					<div>Name</div>
					<div className="fw-bold" style={{ fontSize: "0.9em" }}>
						Rp 0
					</div>
				</div>
			</div>
			<div className="d-flex flex-row align-items-center justify-content-end ms-3 mt-3 mb-4 mx-1 pb-3 border-bottom border-3">
			
				<div className="d-flex flex-row">
					<div
						className="ms-4 me-3"
						style={{ color: "#03ac0e" }}
					>
						Tulis Catatan
					</div>
			


					<div className="me-4" style={{ color: "grey", fontSize: "0.9em" }}>
						Catatan: 
					</div>
	
	
					
						<div className="ms-auto" style={{ color: "grey" }}>
							Pindahkan ke wishlist
						</div>
						<div className="ms-3" style={{ color: "grey" }}>
							|
						</div>
					
			
				<div className="d-flex flex-row ms-4 me-1 align-items-center">
					<button
						type="button"
						className="btn btn-link me-2 fw-bold"
						style={{ textDecoration: "none", color: "#03AC0E" }}
					
					>
						-
					</button>
				0
					<button
						type="button"
						className="btn btn-link ms-2 fw-bold"
						style={{ textDecoration: "none", color: "#03AC0E" }}
		
					>
						+
					</button>
				</div>
			</div>
		</div>
		</>)
}