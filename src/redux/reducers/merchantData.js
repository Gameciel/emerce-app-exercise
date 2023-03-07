const init_state = {
	1: {
		name: "Toko A",
		status: "Power Merchant",
		location: "Jakarta",
	},
	2: {
		name: "Toko B",
		status: "Pro Merchant",
		location: "Bandung",
	},
};

export const merchantReducer = (state = init_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
