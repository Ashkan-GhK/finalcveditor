import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../resumethree/CvThree.css';

function CvThree() {

	const showUserInput = useSelector(state => state.input);
	const showUserLastName = useSelector(state => state.lastName);
	const showPhoneNum = useSelector(state => state.phoneNum);
	const showEmail = useSelector(state => state.email);
	const showAddress = useSelector(state => state.address);
	const showObjective = useSelector(state => state.objective);

	
 
	const [defaultName, setDefaultName] = useState('Alex')
	useEffect(() => {
		const loadName = JSON.parse(localStorage.getItem('firstName') || 'Alex')
		setDefaultName(loadName)
		console.log(defaultName)	

	},[defaultName])


	return (
		<div className="cvThree">
		<div className="cvThree__container">
			{/* Left Section */}
			<div className="cvThree__left">
				<div className="cvThree__left__content contact">
					<h5>Contact detail</h5>
					<div className="cvThree__left__contact">
						<div className="cv__content email">
							<span>Email</span>
							<p>{showEmail.length-1 >= 0 ? showEmail : "alex@gmail.com"}</p>
						</div>
						<div className="cv__content address">
							<span>Address</span>
							<p>{showAddress.length-1 >= 0 ? showAddress : "42 Fulham Palace Rd W69PH"}</p>
						</div>
						<div className="cv__content phone">
							<span>Phone</span>
							<p>{showPhoneNum.length-1 >= 0 ? showPhoneNum : "+447779277799"}</p>
						</div>
						
					</div>

				</div>
				
				<div className="cvThree__left__content">
					<h5>Language</h5>
					<div className="cv__content ">
							<p>English</p>
							<p>Persian</p>
					</div>

				</div>

				<div className="cvThree__left__content">
					<h5>Skills</h5>
					<div className="cv__content ">
						<p>Project Management:<span>Expert</span></p>
						<p>Asistant Manager: <span>Expert</span></p>
					</div>
				</div>

				<div className="cvThree__left__content">
					<h5>Interests</h5>
					<div className="cv__content ">
							<p>Tennis</p>
							<p>Movie</p>
							<p>Music</p>
							<p>coding war</p>
							
					</div>
				</div>
			</div>

			{/* Right Section */}
	            <div className="cvThree__right">
				<div className="cvThree__right__content">
					<div className="cvThree__right__content__name">
						<p>{showUserInput.length-1 >= 0 ? showUserInput : defaultName}&nbsp;
					 {showUserLastName.length-1 >= 0 ? showUserLastName : "Gakan"}</p>
					</div>
					<div className="cvThree__right__content__objective">
						<p>{showObjective.length-1 >= 0 ? showObjective : "Would like to gain the necessary experience to hopefully become Operations Manager of all services running across the platform "}</p>
					</div>
				</div>

				{/* WORK EXPERIENCE */}

				<p className="title__workexsperience">Work Experience</p>
				<div className="cvThree__right__content__work">
					
	
					<div className="cvThree__right__content__work__left">

					<div className="cvThree__right__content__jobbTitle">
						<p>Project Manager</p>
					</div>
					<div className="cvThree__right__content__companyName">
						<p>Google</p>
					</div>
					<div className="cvThree__right__content__city">
						<p>London</p>
					</div>
					<div className="cvThree__right__content__date">
						<div className="dateFrom"><p>Nov 2012 /</p></div>
						<div className="dateTo"><p>Apr 2021</p></div>
					</div>
					
					</div>

					<div className="cvThree__right__content__work__right">
						<div className="cvThree__right__content__job__description">
						<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
						</div>


						
					</div>



				</div>

				{/* EDUCATION */}

				<p className="title__education">Education</p>
				<div className="cvThree__right__content__education">
					
	
					<div className="cvThree__right__content__education__left">

					<div className="cvThree__right__content__degree">
						<p>Project Manager</p>
					</div>
					<div className="cvThree__right__content__university">
						<p>Google</p>
					</div>
					<div className="cvThree__right__content__place">
						<p>London</p>
					</div>
					<div className="cvThree__right__content__date">
						<div className="dateFrom"><p>Nov 2012 /</p></div>
						<div className="dateTo"><p>Apr 2021</p></div>
					</div>
					
					</div>
					

					<div className="cvThree__right__content__education__right">
						<div className="cvThree__right__content__education__description">
						<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
						</div>
					</div>
					

</div>
		    </div>
		  </div>
		</div>
	)
}

export default CvThree
