const init_state = [
	{
		id: 1,
		merchantID: 1,
		name: "Item A",
		price: 125000,
		qty: 1,
		image:
			"https://i.etsystatic.com/21350989/r/il/712b92/3793430221/il_794xN.3793430221_9i8k.jpg",
		note: "",
	},
	{
		id: 2,
		merchantID: 1,
		name: "Kaos - Hitam",
		price: 135000,
		qty: 2,
		image:
			"https://i.etsystatic.com/12431793/r/il/cf40bb/1915762978/il_570xN.1915762978_jlw1.jpg",
		note: "Ukuran XL",
	},
	{
		id: 3,
		merchantID: 2,
		name: "Item C",
		price: 145000,
		qty: 3,
		image:
			"https://i.etsystatic.com/26318708/r/il/5afa04/4168889983/il_794xN.4168889983_ejl9.jpg",
		note: "",
	},
];

export const cartReducer = (state = init_state, action) => {
	switch (action.type) {
		case "INCREMENT_BY_ONE":
			const toIncrement = incrementFrom(state, action);
			return toIncrement;

		case "DECREMENT_BY_ONE":
			const toDecrement = decrementFrom(state, action);
			return toDecrement;

		case "MODIFY_NOTE":
			const toModify = modifyFrom(state, action);
			return toModify;

		case "HARD_DELETE":
			return state
				.filter(item => item.id !== action.payload)
				.sort((a, b) => a.id - b.id);

		default:
			return state;
	}
};

const incrementFrom = (state, action) => {
	const incrementedData = JSON.parse(JSON.stringify(state)).filter(
		item => item.id === action.payload
	);
	incrementedData[0].qty += 1;

	return [
		...JSON.parse(JSON.stringify(state)).filter(
			item => item.id !== action.payload
		),
		...incrementedData,
	].sort((a, b) => a.id - b.id);
};

const decrementFrom = (state, action) => {
	const decrementedData = JSON.parse(JSON.stringify(state)).filter(
		item => item.id === action.payload
	);
	decrementedData[0].qty -= 1;

	if (decrementedData[0].qty === 0) {
		return [
			...JSON.parse(JSON.stringify(state)).filter(
				item => item.id !== action.payload
			),
		].sort((a, b) => a.id - b.id);
	} else {
		return [
			...JSON.parse(JSON.stringify(state)).filter(
				item => item.id !== action.payload
			),
			...decrementedData,
		].sort((a, b) => a.id - b.id);
	}
};

const modifyFrom = (state, action) => {
	const modifiedData = JSON.parse(JSON.stringify(state)).filter(
		item => item.id === action.payload.itemID
	);

	if (action.payload.itemID) {
		modifiedData[0].note = action.payload.string;
	}

	return [
		...JSON.parse(JSON.stringify(state)).filter(
			item => item.id !== action.payload.itemID
		),
		...modifiedData,
	].sort((a, b) => a.id - b.id);
};
