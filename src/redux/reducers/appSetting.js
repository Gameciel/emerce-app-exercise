const init_state = {
	deleteMode: false,
};
export const appSettingReducer = (state = init_state, action) => {
	switch (action.type) {
		case "TOGGLE_ON_DELETE_MODE":
			return { ...state, deleteMode: true };

		case "TOGGLE_OFF_DELETE_MODE":
			return { ...state, deleteMode: false };

		default:
			return state;
	}
};
