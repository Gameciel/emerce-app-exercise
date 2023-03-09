import React from "react";

export default function MiniCart(props) {
	return props.cartData.map(item => {
		return (
			<div>
				<hr className="mt-3 mb-3" />
				<div className="d-flex flex-row align-items-center">
					<div>
						<img
							className="me-3"
							src={item.image}
							style={{ width: "50px" }}
						></img>
					</div>
					<div className="me-auto">
						<div className="fw-bold">
							{item.name} ({item.qty > 1 ? `${item.qty} pcs` : `${item.qty} pc`}
							)
						</div>
						<div>@ Rp{item.price.toLocaleString("id")} / pc</div>
					</div>
					<div className="fw-bold ms-4" style={{ color: "#F96B01" }}>
						Rp {(item.price * item.qty).toLocaleString("id")}
					</div>
				</div>
			</div>
		);
	});
}
