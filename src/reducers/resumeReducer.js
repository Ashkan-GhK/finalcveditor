const initState = {
	// GET INPUT DATA FROM LOCALSTORAGE IF THERE IS ANY DATA, OTHERWISE IT SHOWS ALEX AS A DEFAULT NAME
	input: JSON.parse(localStorage.getItem('firstName')) || 'Alex',
	// GET INPUT DATA FROM LOCALSTORAGE IF THERE IS ANY DATA, OTHERWISE IT SHOWS GAKAN AS A DEFAULT LASTNAME
	lastName: JSON.parse(localStorage.getItem('lastName')) || 'Gakan',
	phoneNum: '+447779277799',
	email: 'alex@gmail.com',
	address: '42 Fulham Palace Rd w6 9ph',
	objective: 'Would like to gain the necessary experience to hopefully become Operations Manager of all services running across the platform',
	cvTempSelection: null,
	isOpen: false,
	editorMobile: null,
	closeMenuItems: null,
	showCvItem: null,
	showEditorFooter: null,
	showPreviewItem: null,
	position: JSON.parse(localStorage.getItem('position')) || 'Project Manager',
	companyName: JSON.parse(localStorage.getItem('company')) || 'Google',
	companyLocation: JSON.parse(localStorage.getItem('companylocation')) || 'London',
	workDateFrom: JSON.parse(localStorage.getItem('workdatefrom')) || 'Sep 2020',	
	workDateTo: JSON.parse(localStorage.getItem('workdateto')) || 'Current',
	workDescription: JSON.parse(localStorage.getItem('workdescription')) || 'lab lab lab',


		
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
		case "SHOW_CVTEMP_ITEM":
			return {
				...state,
				showCvItem: action.showCvItem
			}
		case "SHOW_EDITOR_FOOTER":
			return {
				...state,
				showEditorFooter: action.showEditorFooter
			}
		case "SHOW_PREVIEW_ITEM":
			return {
				...state,
				showPreviewItem: action.showPreviewItem
			}
		case "SHOW_POSITION":
			return {
				...state,
				position: action.position
			}
		case "SHOW_COMPANY_NAME":
			return {
				...state,
				companyName: action.companyName
			}
		case "SHOW_COMPANY_LOCATION":
			return {
				...state,
				companyLocation: action.companyLocation
			}
		case "SHOW_WORK_DATE_FROM":
			return {
				...state,
				workDateFrom: action.workDateFrom
			}
		case "SHOW_WORK_DATE_TO":
			return {
				...state,
				workDateTo: action.workDateTo
			}
		case "SHOW_WORK_DESCRIPTION":
			return {
				...state,
				workDescription: action.workDescription
			}
		
		
	        default:
		        return state
	}
}

export default Reducer;
