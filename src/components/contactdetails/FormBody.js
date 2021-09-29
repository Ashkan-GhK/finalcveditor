import React,{useState} from 'react';
import '../../styles/contactform/FormBody.css';
import {useDispatch} from 'react-redux';


function FormBody() {
	const dispatch = useDispatch();
	// FIRSTNAME
	const [input, setInput] = useState("");
        const [userVal, setUserVal] = useState("");
        const handleInput = event => {
             setInput(event.target.value);
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
	const [lastName, setLastName] = useState("");
	const [lastNameVal, setLastNameVal] = useState("");

	const lastNameInput = event => {
		setLastName(event.target.value);
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





	return (
		<div className="formbody">
			<div className="formbody__input__container">
				<div className="formbody__input">
				        <label for="fname">First Name</label><br />
					<input onChange={handleInput}  type="text" id="fname" name="fname" maxLength="16" />
					<p onChange={logValue}>{showInput(input)}</p>
				</div>
				<div className="formbody__input">
				        <label for="lname">Last Name</label> <br />
					<input onChange={lastNameInput} type="text" id="lname"  name="lname" maxLength="16"/>
					<p onChange={logLastNameVal}>{showLastName(lastName)}</p>

				</div>
				<div className="formbody__input">
				        <label for="phone">Phone</label> <br />
					<input onChange={phoneNumInput} type="text" id="phone" name="phone" maxLength="16"/>
					<p onChange={logPhoneNumVal}>{showPhoneNum(phoneNum)}</p>

				</div>
				<div className="formbody__input">
				        <label for="email">Email</label> <br />
					<input type="email" id="email" name="email"/>
				</div>
				<div className="formbody__input">
				        <label for="address">Address</label> <br />
					<input type="text" id="address" name="address"/>
				</div>
			</div>
			
		</div>
	)
}

export default FormBody
