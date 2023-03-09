const init_state = [
	{
		id: 4,
		name: "Miniature Decoration",
		price: 400000,
		qty: 1,
		image:
			"https://i.etsystatic.com/6891259/r/il/2cfed6/2965077259/il_794xN.2965077259_3570.jpg",
		merchant: {
			name: "Toko A",
			status: "Power Merchant",
			location: "Jakarta",
		},
	},
	{
		id: 5,
		name: "Essential Oil",
		price: 500000,
		qty: 2,
		image:
			"https://i.etsystatic.com/iap/55c7ab/4521497480/iap_640x640.4521497480_4brrs39z.jpg?version=0",
		merchant: {
			name: "Toko B",
			status: "Pro Merchant",
			location: "Bandung",
		},
	},
	{
		id: 6,
		name: "DIY Embroidery set for beginner",
		price: 600000,
		qty: 3,
		image:
			"https://i.etsystatic.com/20217532/r/il/45a493/4097358845/il_794xN.4097358845_44w7.jpg",
		merchant: {
			name: "Toko B",
			status: "Pro Merchant",
			location: "Bandung",
		},
	},
];

export const cartReducer = (state = init_state, action) => {
	switch (action.type) {
		case "INCREMENT_BY_ONE":
			const toBeIncremented = state.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, qty: item.qty + 1 };
				} else {
					return item;
				}
			});

			return toBeIncremented;

		case "DECREMENT_BY_ONE":
			const toBeDecremented = state.map(item => {
				console.log(item.qty);
				if (item.id === action.payload.id && item.qty - 1 === 0) {
					return null;
				} else if (item.id === action.payload.id) {
					return { ...item, qty: item.qty - 1 };
				} else {
					return item;
				}
			});
			return toBeDecremented.filter(value => value !== null);

		// case "MODIFY_NOTE":
		// 	return state;

		case "HARD_DELETE":
			return state;

		case "ADD_TO_CART":
			//if existent, add by one
			return state;

		default:
			return state;
	}
};
