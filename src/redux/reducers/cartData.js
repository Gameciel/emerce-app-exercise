const init_state = [];

export const cartReducer = (state = init_state, action) => {
	switch (action.type) {

		case "INCREMENT_BY_ONE":
			return state;

		case "DECREMENT_BY_ONE":
			return state;

		case "MODIFY_NOTE":
			return state;

		case "HARD_DELETE":
			return state;
			
		case "ADD_TO_CART":
			return state

		default:
			return state;
	}
};


