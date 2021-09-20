import React from 'react';
import '../../styles/contactform/FormHeader.css';
import blackimg from '../../image/blackimg.png';





function FormHeader() {
	
	const handleClick = (event) => {
		event.preventDefault();
	};


	return (
		<div className="formheader">
			<div className="formheader__img__container">
				<img  width="100px" src={blackimg} alt="img" />
			
		        <div className="formheader__download__btn">
				<button onClick={handleClick}>
					ADD YOUR PHOTO
				</button>
			</div>
			<div className="formheader___delete__btn">
				<button onClick={handleClick}>
					Delete Photo
				</button>
			</div>
			</div>


		</div>
	)
}

export default FormHeader;
