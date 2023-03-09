export const incrementByOne = itemID => {
	return dispatch => {
		dispatch({
			type: "INCREMENT_BY_ONE",
			payload: { id: itemID },
		});
	};
};

export const decrementByOne = itemID => {
	return dispatch => {
		dispatch({
			type: "DECREMENT_BY_ONE",
			payload: { id: itemID },
		});
	};
};

export const addItemToCart = item => {
	return dispatch => {
		dispatch({
			type: "ADD_ITEM_TO_CART",
			payload: item,
		});
	};
};
