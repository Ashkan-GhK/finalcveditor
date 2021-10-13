const initState = {
	input: 'Alex',
	lastName: 'Gakan',
	phoneNum: '+447779277799',
	email: 'alex@gmail.com',
	address: '42 Fulham Palace Rd w6 9ph',
	objective: 'Would like to gain the necessary experience to hopefully become Operations Manager of all services running across the platform',
	cvTempSelection: null,
	isOpen: false,
	editorMobile: null,
	closeMenuItems: false
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
		case "SHOW_EMAIL_INPUT":
			return {
				...state,
				email: action.email
			}		
		case "SHOW_ADDRESS_INPUT":
			return {
				...state,
				address: action.address
			}	
		case "SHOW_OBJECTIVE":
			return {
				...state,
				objective: action.objective
			}
		case "SHOW_CVTEMPLATES":
			return {
				...state,
				cvTempSelection: action.cvTempSelection
			}
		case "SHOW_MENU_ITEMS":
			return {
				...state,
				isOpen: action.isOpen
			}
		case "SHOW_EDITOR_ITEM":
			return {
				...state,
				editorMobile: action.editorMobile
			}
		case "CLOSE_MENU-ITEMS"	:
			return {
				...state,
				closeMenuItems : action.closeMenuItems
			}
	default:
		return state
	}
}

export default Reducer;
