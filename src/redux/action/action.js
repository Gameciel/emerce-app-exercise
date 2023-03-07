export const incrementItemOnCart = id => {
	return dispatch => {
		dispatch({
			type: "INCREMENT_BY_ONE",
			payload: id,
		});
	};
};
