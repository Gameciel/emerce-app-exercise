import React from "react";
import AdminPage from "../components/AdminPage";
import Mynav from "../components/Navs/Mynav";
import NavMini from "../components/Navs/NavMini";


export default function Main() {
	return (
		<>
			<NavMini />
			<Mynav />
			<AdminPage />
		</>
	);
}
