import React,{useEffect, useState} from 'react';
import '../../styles/contactform/FormBody.css';
import {useDispatch} from 'react-redux';



function FormBody() {
	const dispatch = useDispatch();

	// FIRSTNAME

	const [input, setInput] = useState(JSON.parse(localStorage.getItem('firstName')) || 'Alex');
        const [userVal, setUserVal] = useState("");
	// Save To Local Storage FirstName
	// const [storeInput, setStoreInput] = useState("");
	
        const handleInput = async(event) => {
               setInput(event.target.value);
	     await localStorage.setItem('firstName',JSON.stringify(input));

	//      setStoreInput(event.target.value);
        };	
        let logValue = () => {
          console.log(userVal)
          setUserVal(input)
        };
        function showInput (input) {	
          dispatch({
            type: 'SHOW_INPUT',
            input: input
          })
        }

	// LASTNAME
	const [lastName, setLastName] = useState(JSON.parse(localStorage.getItem('lastName')) || 'Gakan');
	const [lastNameVal, setLastNameVal] = useState("");

	const lastNameInput = async(event) => {
		setLastName(event.target.value);
		await localStorage.setItem('firstName',JSON.stringify(input));


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
		const firstName = localStorage.setItem('firstName',JSON.stringify(input));
		if (firstName) {
			setInput(firstName)
		} else {
			setInput(JSON.parse(localStorage.getItem('firstName')))
		}
		console.log(input)
		const userLastName = localStorage.setItem('lastName',JSON.stringify(lastName));
		if(userLastName) {
			setLastName(userLastName)
		} else {
			setLastName(JSON.parse(localStorage.getItem('lastName')))

		}
	}, [input,lastName]);
	


	

	//PHONE NUMBER

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


	//EMAIL

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

	//ADDRESS
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
		<div className="formbody">
			<div className="formbody__input__container">
				<div className="formbody__input">
				        <label for="fname">First Name</label><br />
					<input  onChange={handleInput} value={input} type="text" id="fname" name="fname" maxLength="16" />
					<p onChange={logValue}>{showInput(input)}</p>
				</div>
				<div className="formbody__input">
				        <label for="lname">Last Name</label> <br />
					<input onChange={lastNameInput}  value={lastName} type="text" id="lname"  name="lname" maxLength="16"/>
					<p onChange={logLastNameVal}>{showLastName(lastName)}</p>

				</div>
				<div className="formbody__input">
				        <label for="phone">Phone</label> <br />
					<input onChange={phoneNumInput} type="text" id="phone" name="phone" maxLength="16"/>
					<p onChange={logPhoneNumVal}>{showPhoneNum(phoneNum)}</p>
					
				</div>
				<div className="formbody__input">
				        <label for="email">Email</label> <br />
					<input onChange={emailUserInput} type="email" id="email" name="email" maxLength="32"/>
					<p onChange={logEmailVal}>{showEmail(email)}</p>

				</div>
				<div className="formbody__input">
				        <label for="address">Address</label> <br />
					<input onChange={addressInput} type="text" id="address" name="address" maxLength="38"/>
					<p onChange={logAddressVal}>{showAddress(address)}</p>

				</div>
			</div>
			
		</div>
	)
}

export default FormBody
