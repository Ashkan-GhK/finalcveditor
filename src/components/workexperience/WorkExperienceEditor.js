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
	const [lastName, setLastName] = useState(JSON.parse(localStorage.getItem('lastName')) || 'Gakan');
	const [lastNameVal, setLastNameVal] = useState("");

	const lastNameInput = async(event) => {
		setLastName(event.target.value);
		await localStorage.setItem('firstName',JSON.stringify(position));


	   };
   
	   let logLastNameVal = () => {
		   console.log(lastNameVal)
	     setLastNameVal(lastName);
	   };


	function showLastName (lastName) {
		dispatch({
			type: 'SHOW_LASTNAME_INPUT',
			lastName : lastName
		})
	}
	
	useEffect(() => {
		const myPosition = localStorage.setItem('position',JSON.stringify(position));
		if (myPosition) {
			setPosition(myPosition)
		} else {
			setPosition(JSON.parse(localStorage.getItem('position')))
		}
		console.log(position)
		const userLastName = localStorage.setItem('lastName',JSON.stringify(lastName));
		if(userLastName) {
			setLastName(userLastName)
		} else {
			setLastName(JSON.parse(localStorage.getItem('lastName')))

		}
	}, [position,lastName]);
	


	

	//LOCATION OF COMPANY

	const [phoneNum, setPhoneNum] = useState("");
	const [phoneNumVal, setPhoneNumVal] = useState("");

	const phoneNumInput = event => {
		setPhoneNum(event.target.value);
	   };
   
	   let logPhoneNumVal = () => {
		   console.log(phoneNumVal)
	     setPhoneNumVal(phoneNum);
	   };


	function showPhoneNum (phoneNum) {
		dispatch({
			type: 'SHOW_PHONENUM_INPUT',
			phoneNum : phoneNum
		})
	}


	//DATE FROM

	const [email, setEmail] = useState("");
	const [emailVal, setEmailVal] = useState("");

	const emailUserInput = event => {
		setEmail(event.target.value);
	   };
   
	   let logEmailVal = () => {
		   console.log(emailVal)
	           setEmailVal(email);
	   };


	function showEmail (email) {
		dispatch({
			type: 'SHOW_EMAIL_INPUT',
			email : email
		})
	}

	//DATE TO
	const [address, setAddress] = useState("");
	const [addressVal, setAddressVal] = useState("");

	const addressInput = event => {
		setAddress(event.target.value);
	   };
   
	   let logAddressVal = () => {
		   console.log(addressVal)
	     setAddressVal(address);
	   };


	function showAddress (address) {
		dispatch({
			type: 'SHOW_ADDRESS_INPUT',
			address : address
		})
	}





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
					<input onChange={lastNameInput}  value={lastName} type="text" id="lname"  name="lname" maxLength="16"/>
					<p onChange={logLastNameVal}>{showLastName(lastName)}</p>

				</div>
				<div className="formbody__input">
				        <label for="location">Location</label> <br />
					<input onChange={phoneNumInput} type="text" id="phone" name="phone" maxLength="16"/>
					<p onChange={logPhoneNumVal}>{showPhoneNum(phoneNum)}</p>
					
				</div>
				<div className="formbody__input">
				        <label for="datefrom">From</label> <br />
					<input onChange={emailUserInput} type="email" id="email" name="email" maxLength="32"/>
					<p onChange={logEmailVal}>{showEmail(email)}</p>

				</div>
				<div className="formbody__input">
				        <label for="dateto">To</label> <br />
					<input onChange={addressInput} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logAddressVal}>{showAddress(address)}</p>

				</div>
				<div className="formbody__input">
				        <label for="workdescription">Work Description</label><br />
					<textarea onChange={addressInput} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logAddressVal}>{showAddress(address)}</p>

				</div>
			</div>
			
		</div>
	)
}

export default WorkExperienceEditor
