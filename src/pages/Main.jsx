import React from "react";

import Mynav from "../components/Navs/Mynav";
import NavMini from "../components/Navs/NavMini";
import MainMenu from "../components/MainMenu";

export default function Main() {
	return (
		<>
			<NavMini />
			<Mynav />
			<MainMenu />
		</>
	);
}
