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

export const toggleDeleteMode = boolean => {
	return dispatch => {
		if (boolean) {
			dispatch({
				type: "TOGGLE_ON_DELETE_MODE",
			});
		} else {
			dispatch({
				type: "TOGGLE_OFF_DELETE_MODE",
			});
		}
	};
};
