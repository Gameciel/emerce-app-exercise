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
