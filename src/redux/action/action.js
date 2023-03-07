export const incrementItemOnCart = id => {
	return dispatch => {
		dispatch({
			type: "INCREMENT_BY_ONE",
			payload: id,
		});
	};
};

export const decrementItemOnCart = id => {
	return dispatch => {
		dispatch({
			type: "DECREMENT_BY_ONE",
			payload: id,
		});
	};
};

export const hardDeleteItemFromCart = id => {
	return dispatch => {
		dispatch({
			type: "HARD_DELETE",
			payload: id,
		});
	};
};
