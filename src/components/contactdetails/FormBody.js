import React,{useState} from 'react';
import '../../styles/contactform/FormBody.css';
import {useDispatch} from 'react-redux';


function FormBody() {
	const dispatch = useDispatch();
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


	return (
		<div className="formbody">
			<div className="formbody__input__container">
				<div className="formbody__input">
				        <label for="fname">First Name</label><br />
					<input onChange={handleInput}  type="text" id="fname" name="fname" />

					<p onChange={logValue}>{showInput(input)}</p>
				</div>
				<div className="formbody__input">
				        <label for="lname">Last Name</label> <br />
					<input type="text" id="lname"  name="lname"/>
				</div>
				<div className="formbody__input">
				        <label for="phone">Phone</label> <br />
					<input type="text" id="phone" name="phone" />
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
