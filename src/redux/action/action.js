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

export const toggleDeleteMode = boolean => {
	return dispatch => {
		dispatch({
			type: "TOGGLE_DELETE_MODE",
			payload: boolean,
		});
	};
};

export const hardDeleteItem = itemID => {
	return dispatch => {
		dispatch({
			type: "HARD_DELETE_ITEM",
			payload: itemID,
		});
	};
};
