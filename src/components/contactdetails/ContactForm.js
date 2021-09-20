import React from 'react'
import '../../styles/contactform/ContactForm.css'
import FormBody from './FormBody'
import FormHeader from './FormHeader'

function ContactForm() {

	


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
				
			</div>
			
		</form>
	)
}

export default ContactForm
