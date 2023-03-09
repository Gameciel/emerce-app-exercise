const init_state = [
	{
		id: 4,
		name: "Miniature Decoration",
		price: 400000,
		qty: 2,
		image:
			"https://i.etsystatic.com/6891259/r/il/2cfed6/2965077259/il_794xN.2965077259_3570.jpg",
		merchant: {
			name: "Toko A",
			status: "Power Merchant",
			location: "Jakarta",
		},
	},
];

export const cartReducer = (state = init_state, action) => {
	switch (action.type) {
		case "INCREMENT_BY_ONE":
			return state;

		case "DECREMENT_BY_ONE":
			return state;

		case "MODIFY_NOTE":
			return state;

		case "HARD_DELETE":
			return state;

		case "ADD_TO_CART":
			return state;

		default:
			return state;
	}
};
