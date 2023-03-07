const init_state = {
	1: {
		merchantName: "Toko A",
		merchantStatus: "Power Merchant",
	},
	2: {
		merchantName: "Toko B",
		merchantStatus: "Pro Merchant",
	},
};

export const merchantReducer = (state = init_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
