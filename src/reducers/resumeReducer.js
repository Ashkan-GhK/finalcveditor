const initState = {
	input: 'Alex',
	lastName: ' Gakan',
	phoneNum: '+447779277799'
	

}

const Reducer = (state = initState,action) => {
	switch (action.type) {
		case "SHOW_INPUT":
			return {
				...state,
				input: action.input
			}
		case "SHOW_LASTNAME_INPUT":
			return {
				...state,
				lastName: action.lastName
			}
		case "SHOW_PHONENUM_INPUT":
			return {
			        ...state,
				phoneNum: action.phoneNum
			}		
	default:
		return state
	}
}

export default Reducer;
