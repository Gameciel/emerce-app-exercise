import React from "react";

export default function NavMini() {
	return (
		<div
			style={{
				fontSize: "13px",
				backgroundColor: "#f3f4f5",
			}}
			className="d-flex flex-row justify-content-between px-4 py-1"
		>
			<div>
				<i className="bi bi-download me-2"></i>Lorem ipsum
			</div>
			<div className="d-flex flex-row align-self-end">
				<div className="mx-3">Dolor</div>
				<div className="mx-3">Sit</div>
				<div className="mx-3">Amet</div>
				<div className="mx-3">Consectur</div>
				<div className="mx-3">Adipisicing</div>
			</div>
		</div>
	);
}
