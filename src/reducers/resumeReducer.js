const initState = {
	input: 'Alex'
}

const Reducer = (state = initState,action) => {
	switch (action.type) {
		case "SHOW_INPUT":
			return {
				...state,
				input: action.input
			}
	default:
		return state
	}
}

export default Reducer;
