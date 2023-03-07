const init_state = [
	{
		id: 1,
		merchantID: 1,
		name: "Kaos Seal",
		price: 125000,
		qty: 1,
		image:
			"https://cdn.discordapp.com/attachments/1020655452754804817/1074618985426976808/image.png",
	},
	{
		id: 2,
		merchantID: 1,
		name: "Kaos Seal2",
		price: 135000,
		qty: 2,
		image:
			"https://i.etsystatic.com/12431793/r/il/cf40bb/1915762978/il_570xN.1915762978_jlw1.jpg",
	},
	{
		id: 3,
		merchantID: 2,
		name: "Tas Seal",
		price: 145000,
		qty: 3,
		image:
			"https://i.pinimg.com/236x/a7/f2/41/a7f2416535db5ecc953cfaf013057bc0--baby-seal-cute-cartoon.jpg",
	},
];

export const cartReducer = (state = init_state, action) => {
	switch (action.type) {
		case "HARD_REMOVE":
			return state.filter(item => item.id === action.payload.id);

		default:
			return state;
	}
};
