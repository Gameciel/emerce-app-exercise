// export const incrementItemOnCart = id => {
// 	return dispatch => {
// 		dispatch({
// 			type: "INCREMENT_BY_ONE",
// 			payload: id,
// 		});
// 	};
// };

// export const decrementItemOnCart = id => {
// 	return dispatch => {
// 		dispatch({
// 			type: "DECREMENT_BY_ONE",
// 			payload: id,
// 		});
// 	};
// };

// export const hardDeleteItemFromCart = id => {
// 	return dispatch => {
// 		dispatch({
// 			type: "HARD_DELETE",
// 			payload: id,
// 		});
// 	};
// };

// export const addItemToCart = (item, itemID) => {
// 	return dispatch => {
// 		dispatch({
// 			type: "ADD_TO_CART",
// 			payload: { item: item, id: itemID },
// 		});
// 	};
// };

// export const toggleDeleteMode = boolean => {
// 	return dispatch => {
// 		if (boolean) {
// 			dispatch({
// 				type: "TOGGLE_ON_DELETE_MODE",
// 			});
// 		} else {
// 			dispatch({
// 				type: "TOGGLE_OFF_DELETE_MODE",
// 			});
// 		}
// 	};
// };

// export const toggleNoteSetting = itemID => {
// 	return dispatch => {
// 		dispatch({
// 			type: "TOGGLE_ADD_NOTE",
// 			payload: itemID,
// 		});
// 	};
// };

// export const modifyNote = (param, string, itemID) => {
// 	return dispatch => {
// 		dispatch({
// 			type: "MODIFY_NOTE",
// 			payload: { param, string, itemID },
// 		});
// 	};
// };
