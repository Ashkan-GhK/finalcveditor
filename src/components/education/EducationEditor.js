import React,{useEffect, useState} from 'react';
import '../../styles/contactform/FormBody.css';
import '../workexperience/WorkExperienceEditor.css';
import {useDispatch} from 'react-redux';



function EducationEditor() {
	const dispatch = useDispatch();

	// NAME OF INSTITUTION

	const [uniName, setUniName] = useState(JSON.parse(localStorage.getItem('uniName')) || 'University of London');
        const [userUniName, setUserUniName] = useState("");
	// Save To Local Storage Position
	
        const uniNameInput = async(event) => {
               setUniName(event.target.value);
	     await localStorage.setItem('uniname',JSON.stringify(uniName));
        };	
        let logUniName = () => {
          console.log(userUniName)
          setUserUniName(uniName)
        };
        function showUniName (uniName) {	
          dispatch({
            type: 'SHOW_UNI_NAME',
            uniName: uniName
          })
        }

	// DEGREE
	const [degreeName, setDegreeName] = useState(JSON.parse(localStorage.getItem('degree')) || 'Computer Science');
	const [degreeNameVal, setDegreeNameVal] = useState("");

	const degreeNameInput = async(event) => {
		setDegreeName(event.target.value);
		await localStorage.setItem('degree',JSON.stringify(degreeName));
		

	   };
   
	   let logDegreeNameVal = () => {
		   console.log(degreeNameVal)
	     setDegreeNameVal(degreeName);
	   };


	function showDegreeName (degreeName) {
		dispatch({
			type: 'SHOW_DEGREE_NAME',
			degreeName : degreeName
		})
	}

	//LOCATION OF COMPANY
	
	const [uniLocation, setUniLocation] = useState(JSON.parse(localStorage.getItem('unilocation')) || 'London');
	const [uniLocationVal, setUniLocationNumVal] = useState("");

	const uniLocationInput = async(event) => {
		setUniLocation(event.target.value);
		await localStorage.setItem('unilocation',JSON.stringify(uniLocation));


	   };
   
	   let logUniLocationVal = () => {
		   console.log(uniLocationVal)
	     setUniLocationNumVal(uniLocation);
	   };


	function showUniLocation (uniLocation) {
		dispatch({
			type: 'SHOW_UNI_LOCATION',
			uniLocation : uniLocation
		})
	}


	//DATE FROM

	const [uniDateFrom, setUniDateFrom] = useState(JSON.parse(localStorage.getItem('unidatefrom')) || 'Sep 2020');
	const [uniDateFromVal, setUniDateFromVal] = useState("");

	const uniDateFromInput = async(event) => {
		setUniDateFrom(event.target.value);
		await localStorage.setItem('unidatefrom',JSON.stringify(uniDateFrom));
	   };
   
	   let logUniDateFromVal = () => {
		   console.log(uniDateFromVal)
	           setUniDateFromVal(uniDateFrom);
	   };


	function showUniDateFrom (wuniDateFrom) {
		dispatch({
			type: 'SHOW_UNI_DATE_FROM',
			uniDateFrom : uniDateFrom
		})
	}

	//DATE TO
	const [uniDateTo, setUniDateTo] = useState(JSON.parse(localStorage.getItem('unidateto')) || 'Current');
	const [uniDateToVal, setUniDateToVal] = useState("");
	
	const uniDateToInput = async(event) => {
		setUniDateTo(event.target.value);
		await localStorage.setItem('unidateto',JSON.stringify(uniDateTo));
	   };
   
	   let logUniDateToVal = () => {
		   console.log(uniDateToVal)
	           setUniDateToVal(uniDateTo);
	   };


	function showUniDateTo (uniDateTo) {
		dispatch({
			type: 'SHOW_UNI_DATE_TO',
			uniDateTo : uniDateTo
		})
	}

	// WORK DESCRIPTION
	const [uniDescription, setUniDescription] = useState(JSON.parse(localStorage.getItem('unidescription')) || 'lab lab labb');
	const [uniDescriptionVal, setUniDescriptionVal] = useState("");
	
	const uniDescriptionInput = async(event) => {
		setUniDescription(event.target.value);
		await localStorage.setItem('unidescription',JSON.stringify(uniDescription));
	   };
   
	   let logUniDescription = () => {
		   console.log(uniDescriptionVal)
	           setUniDescriptionVal(uniDescription);
	   };


	function showUniDescription (uniDescription) {
		dispatch({
			type: 'SHOW_UNI_DESCRIPTION',
			uniDescription : uniDescription
		})
	}


	
	useEffect(() => {
		const myUniName = localStorage.setItem('uniname',JSON.stringify(uniName));
		if (myUniName) {
			setUniName(myUniName)
		} else {
			setUniName(JSON.parse(localStorage.getItem('uniname')))
		}

		const userDegreeName = localStorage.setItem('degree',JSON.stringify(degreeName));
		if(userDegreeName) {
			setDegreeName(userDegreeName)
		} else {
			setDegreeName(JSON.parse(localStorage.getItem('degree')))

		}
		const myUniLocation = localStorage.setItem('unilocation',JSON.stringify(uniLocation));
		if (myUniLocation) {
			setUniLocation(myUniLocation)
		} else {
			setUniLocation(JSON.parse(localStorage.getItem('unilocation')))
		}
		const myUniDateFrom = localStorage.setItem('unidatefrom',JSON.stringify(uniDateFrom));
		if (myUniDateFrom) {
			setUniDateFromVal(myUniDateFrom)
		} else {
			setUniDateFromVal(JSON.parse(localStorage.getItem('unidatefrom')))
		}
		const myUniDateTo = localStorage.setItem('unidateto',JSON.stringify(uniDateTo));
		if (myUniDateTo) {
			setUniDateToVal(myUniDateTo)
		} else {
			setUniDateToVal(JSON.parse(localStorage.getItem('unidateto')))
		}
		const myUniDescription = localStorage.setItem('unidescription',JSON.stringify(uniDescription));
		if (myUniDescription) {
			setUniDescription(myUniDescription)
		} else {
			setUniDescriptionVal(JSON.parse(localStorage.getItem('unidescription')))
		}


	}, [degreeName, uniDateFrom, uniDateTo, uniDescription, uniLocation, uniName]);
	


	

	




	return (
		<div className="formbody workexperienceeditor">
			<div className="formbody__input__container">
				{/* <p style={{margin:"20px", fontWeight:"500"}}>Edit Your Professional Experience</p> */}
				<div className="formbody__input">
				        <label for="position">Name of the institution</label><br />
					<input  onChange={uniNameInput} value={uniName} type="text" id="fname" name="fname" maxLength="16" />
					<p onChange={logUniName}>{showUniName(uniName)}</p>
				</div>
				<div className="formbody__input">
				        <label for="company">Degree</label> <br />
					<input onChange={degreeNameInput}  value={degreeName} type="text" id="lname"  name="lname" maxLength="16"/>
					<p onChange={logDegreeNameVal}>{showDegreeName(degreeName)}</p>

				</div>
				<div className="formbody__input">
				        <label for="location">Location</label> <br />
					<input onChange={uniLocationInput} value={uniLocation} type="text" id="phone" name="phone" maxLength="16"/>
					<p onChange={logUniLocationVal}>{showUniLocation(uniLocation)}</p>
					
				</div>
				<div className="formbody__input">
				        <label for="datefrom">From</label> <br />
					<input onChange={uniDateFromInput} value={uniDateFrom} type="email" id="email" name="email" maxLength="32"/>
					<p onChange={logUniDateFromVal}>{showUniDateFrom(uniDateFrom)}</p>

				</div>
				<div className="formbody__input">
				        <label for="dateto">To</label> <br />
					<input onChange={uniDateToInput} value={uniDateTo} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logUniDateToVal}>{showUniDateTo(uniDateTo)}</p>

				</div>
				<div className="formbody__input">
				        <label for="workdescription">Degree Description</label><br />
					<textarea onChange={uniDescriptionInput} value={uniDescription} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logUniDescription}>{showUniDescription(uniDescription)}</p>

				</div>
			</div>
			
		</div>
	)
}

export default EducationEditor
