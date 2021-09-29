import React from 'react'
import '../../styles/contactform/ContactForm.css'
import FormBody from './FormBody'
import FormHeader from './FormHeader'

function ContactForm() {


	const handleClick = (event) => {
		event.preventDefault();
	};
	
	

	return (
		<form className="form">

			{/* Form Header */}
			<div className="form__top">
			<FormHeader />

			</div>

			{/* Form Body */}
			<div className="form__body">
			<FormBody />

			</div>


			{/* Form Footer */}
			<div className="form__footer">
				<div className="form__footer__btn">
				<button onClick={handleClick}>Next</button>
				</div>
			</div>
			
		</form>
	)
}

export default ContactForm
