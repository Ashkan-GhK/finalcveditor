import React,{useEffect, useState} from 'react';
import '../../styles/contactform/FormBody.css';
import './WorkExperienceEditor.css';
import {useDispatch} from 'react-redux';



function WorkExperienceEditor() {
	const dispatch = useDispatch();

	// POSITION

	const [position, setPosition] = useState(JSON.parse(localStorage.getItem('position')) || 'Project Manager');
        const [userPosition, setUserPosition] = useState("");
	// Save To Local Storage Position
	// const [storeInput, setStoreInput] = useState("");
	
        const handleInput = async(event) => {
               setPosition(event.target.value);
	     await localStorage.setItem('position',JSON.stringify(position));

	//      setStoreInput(event.target.value);
        };	
        let logValue = () => {
          console.log(userPosition)
          setUserPosition(position)
        };
        function showInput (position) {	
          dispatch({
            type: 'SHOW_POSITION',
            position: position
          })
        }

	// COMPANY
	const [companyName, setCompanyName] = useState(JSON.parse(localStorage.getItem('company')) || 'Google');
	const [companyNameVal, setCompanyNameVal] = useState("");

	const companyNameInput = async(event) => {
		setCompanyName(event.target.value);
		await localStorage.setItem('company',JSON.stringify(companyName));
		

	   };
   
	   let logCompanyNameVal = () => {
		   console.log(companyNameVal)
	     setCompanyNameVal(companyName);
	   };


	function showCompanyName (companyName) {
		dispatch({
			type: 'SHOW_COMPANY_NAME',
			companyName : companyName
		})
	}

	//LOCATION OF COMPANY
	
	const [companyLocation, setCompanyLocation] = useState(JSON.parse(localStorage.getItem('companylocation')) || 'London');
	const [companyLocationVal, setCompanyLocationNumVal] = useState("");

	const CompanyLocationInput = async(event) => {
		setCompanyLocation(event.target.value);
		await localStorage.setItem('companylocation',JSON.stringify(companyLocation));


	   };
   
	   let logCompanyLocationVal = () => {
		   console.log(companyLocationVal)
	     setCompanyLocationNumVal(companyLocation);
	   };


	function showCompanyLocation (companyLocation) {
		dispatch({
			type: 'SHOW_COMPANY_LOCATION',
			companyLocation : companyLocation
		})
	}


	//DATE FROM

	const [workDateFrom, setWorkDateFrom] = useState(JSON.parse(localStorage.getItem('workdatefrom')) || 'Sep 2020');
	const [workDateFromVal, setWorkDateFromVal] = useState("");

	const workDateFromInput = async(event) => {
		setWorkDateFrom(event.target.value);
		await localStorage.setItem('workdatefrom',JSON.stringify(workDateFrom));
	   };
   
	   let logWorkDateFromVal = () => {
		   console.log(workDateFromVal)
	           setWorkDateFromVal(workDateFrom);
	   };


	function showWorkDateFrom (workDateFrom) {
		dispatch({
			type: 'SHOW_WORK_DATE_FROM',
			workDateFrom : workDateFrom
		})
	}

	//DATE TO
	const [workDateTo, setWorkDateTo] = useState(JSON.parse(localStorage.getItem('workdateto')) || 'Current');
	const [workDateToVal, setWorkDateToVal] = useState("");
	
	const workDateToInput = async(event) => {
		setWorkDateTo(event.target.value);
		await localStorage.setItem('workdateto',JSON.stringify(workDateTo));
	   };
   
	   let logWorkDateToVal = () => {
		   console.log(workDateToVal)
	           setWorkDateToVal(workDateTo);
	   };


	function showWorkDateTo (workDateTo) {
		dispatch({
			type: 'SHOW_WORK_DATE_TO',
			workDateTo : workDateTo
		})
	}

	// WORK DESCRIPTION
	const [workDescription, setWorkDescription] = useState(JSON.parse(localStorage.getItem('workdescription')) || 'lab lab labb');
	const [workDescriptionVal, setWorkDescriptionVal] = useState("");
	
	const workDescriptionInput = async(event) => {
		setWorkDescription(event.target.value);
		await localStorage.setItem('workdescription',JSON.stringify(workDescription));
	   };
   
	   let logWorkDescription = () => {
		   console.log(workDescriptionVal)
	           setWorkDescriptionVal(workDescription);
	   };


	function showWorkDescription (workDescription) {
		dispatch({
			type: 'SHOW_WORK_DESCRIPTION',
			workDescription : workDescription
		})
	}


	
	useEffect(() => {
		const myPosition = localStorage.setItem('position',JSON.stringify(position));
		if (myPosition) {
			setPosition(myPosition)
		} else {
			setPosition(JSON.parse(localStorage.getItem('position')))
		}

		const userCompanyName = localStorage.setItem('company',JSON.stringify(companyName));
		if(userCompanyName) {
			setCompanyName(userCompanyName)
		} else {
			setCompanyName(JSON.parse(localStorage.getItem('company')))

		}
		const myCompanyLocation = localStorage.setItem('companylocation',JSON.stringify(companyLocation));
		if (myCompanyLocation) {
			setCompanyLocation(myCompanyLocation)
		} else {
			setCompanyLocation(JSON.parse(localStorage.getItem('companylocation')))
		}
		const myWorkDateFrom = localStorage.setItem('workdatefrom',JSON.stringify(workDateFrom));
		if (myWorkDateFrom) {
			setWorkDateFromVal(myWorkDateFrom)
		} else {
			setWorkDateFromVal(JSON.parse(localStorage.getItem('workdatefrom')))
		}
		const myWorkDateTo = localStorage.setItem('workdateto',JSON.stringify(workDateTo));
		if (myWorkDateTo) {
			setWorkDateToVal(myWorkDateTo)
		} else {
			setWorkDateToVal(JSON.parse(localStorage.getItem('workdateto')))
		}
		const myWorkDescription = localStorage.setItem('workdescription',JSON.stringify(workDescription));
		if (myWorkDescription) {
			setWorkDescription(myWorkDescription)
		} else {
			setWorkDescriptionVal(JSON.parse(localStorage.getItem('workdescription')))
		}


	}, [position, companyName, companyLocation, workDateFrom, workDateTo,workDescription]);
	


	

	




	return (
		<div className="formbody workexperienceeditor">
			<div className="formbody__input__container">
				{/* <p style={{margin:"20px", fontWeight:"500"}}>Edit Your Professional Experience</p> */}
				<div className="formbody__input">
				        <label for="position">Position</label><br />
					<input  onChange={handleInput} value={position} type="text" id="fname" name="fname" maxLength="16" />
					<p onChange={logValue}>{showInput(position)}</p>
				</div>
				<div className="formbody__input">
				        <label for="company">Company</label> <br />
					<input onChange={companyNameInput}  value={companyName} type="text" id="lname"  name="lname" maxLength="16"/>
					<p onChange={logCompanyNameVal}>{showCompanyName(companyName)}</p>

				</div>
				<div className="formbody__input">
				        <label for="location">Location</label> <br />
					<input onChange={CompanyLocationInput} value={companyLocation} type="text" id="phone" name="phone" maxLength="16"/>
					<p onChange={logCompanyLocationVal}>{showCompanyLocation(companyLocation)}</p>
					
				</div>
				<div className="formbody__input">
				        <label for="datefrom">From</label> <br />
					<input onChange={workDateFromInput} value={workDateFrom} type="email" id="email" name="email" maxLength="32"/>
					<p onChange={logWorkDateFromVal}>{showWorkDateFrom(workDateFrom)}</p>

				</div>
				<div className="formbody__input">
				        <label for="dateto">To</label> <br />
					<input onChange={workDateToInput} value={workDateTo} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logWorkDateToVal}>{showWorkDateTo(workDateTo)}</p>

				</div>
				<div className="formbody__input">
				        <label for="workdescription">Work Description</label><br />
					<textarea onChange={workDescriptionInput} value={workDescription} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logWorkDescription}>{showWorkDescription(workDescription)}</p>

				</div>
			</div>
			
		</div>
	)
}

export default WorkExperienceEditor
