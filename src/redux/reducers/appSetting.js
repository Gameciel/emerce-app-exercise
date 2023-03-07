const init_state = {
	deleteMode: false,
	addNote: 0,
};
export const appSettingReducer = (state = init_state, action) => {
	switch (action.type) {
		case "TOGGLE_ON_DELETE_MODE":
			return { ...state, deleteMode: true };

		case "TOGGLE_OFF_DELETE_MODE":
			return { ...state, deleteMode: false };

		case "TOGGLE_ADD_NOTE":
			return { ...state, addNote: action.payload };

		default:
			return state;
	}
};
