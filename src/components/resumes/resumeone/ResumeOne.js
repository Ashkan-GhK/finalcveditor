import '../resumeone/ResumeOne.css';
import blackimg from '../../../image/blackimg.png';
import {useSelector} from 'react-redux';

function ResumeOne() {

	const showUserInput = useSelector(state => state.input);
	const showUserLastName = useSelector(state => state.lastName);
	const showPhoneNum = useSelector(state => state.phoneNum);
	const showEmail = useSelector(state => state.email);
	const showAddress = useSelector(state => state.address);
	const showObjective = useSelector(state => state.objective);

	
	


	return (
		<div className="resumeone">
			<header className="resumeone__header">
				{/* adding a viv to test */}
				<div className="testdiv">
				<div className="resumeone__header__left">
					<div className="resumeone__name">
					 <p>{showUserInput.length-1 >= 0 ? showUserInput : "Alex"}&nbsp;
					 {showUserLastName.length-1 >= 0 ? showUserLastName : "Gakan"}
					  </p>
					</div>
				</div>
				<div className="resumeone__header__right__container">
				        <div className="resumeone__header__right">
					        <div className="resumeone__header__right__content">
						        <span>Email</span>
							{showEmail.length-1 >= 0 ? showEmail : "alex@gmail.com"}

					         </div>
					        <div className="resumeone__header__right__content break">
						        <span>Address</span>
							{showAddress.length-1 >= 0 ? showAddress : "42 Fulham Palace Rd W69PH"}
					        </div>
					        <div className="resumeone__header__right__content">
						        <span>Phone</span>
							
							{showPhoneNum.length-1 >= 0 ? showPhoneNum : "+447779277799"}
							
					        </div>
				        </div>
					<div className="resumeone__header__img">
					        <img  width="80px" src={blackimg} alt="img" />					
					</div>
			        </div>
				</div>
			</header>
			
			<section className="objective">
				<div className="objective__container">
					<div className="objective__title">
						<p>Objective</p>
					</div>
					<div className="objective__content">
					{showObjective.length-1 >= 0 ? showObjective : "Would like to gain the necessary experience to hopefully become Operations Manager of all services running across the platform "}
					</div>
				</div>				
			</section>


			<p className="workexperience__title">Work Experience</p>


			<section className="workexperience">

				<div className="workexperience__content">
					<div className="workexperience__content__left">
						<div className="workexperience__content__left__job">
							<p>Product Manager</p>
						</div>
						<div className="workexperience__content__left__place">
							<div>
							        <span>Delivero</span>
							</div>
							<div style={{fontWeight:"bolder"}}>
							        <p>London</p>
							</div>
						</div>
						
						<div className="workexperience__content__left__date">
							<div className="workex__date" style={{fontWeight:"bolder"}}>
							        <p>Sep<span>2020</span></p>
								
								
							</div>
							<div style={{ fontWeight:"bold"}}>/</div>
							<div className="workex__date" style={{ fontWeight:"bolder"}}>
							        <p>Sep<span>2021</span></p>
								
							</div>
						</div>
					</div>
					<div className="workexperience__content__right">
						<div className="workexperience__content__right__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
						</div>
					</div>
					
				</div>

			</section>
			
			{/* EDUCATION */}
			<p className="workexperience__title">Education</p>


			<section className="workexperience">
				<div className="workexperience__content">
					<div className="workexperience__content__left">
						<div className="workexperience__content__left__job">
							<p>Msc Computer Science</p>
						</div>
						<div className="workexperience__content__left__place">
							<div>
							        <span>Brunel University</span>
							</div>
							<div style={{fontWeight:"bolder"}}>
							        <p>London</p>
								
							</div>
						</div>
						
						<div className="workexperience__content__left__date">
							<div style={{display:"flex", fontWeight:"bolder"}}>

								<div>2021</div>
							</div>
							
						</div>
					</div>
					<div className="workexperience__content__right">
						<div className="workexperience__content__right__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					
				</div>

			</section>

			<section className="skills__Language">
				<div className="skills__container">
				      <p style={{marginTop:"20px"}}>Skills</p>
				      <div className="skills__container__list">
					      <div className="skills__container__list__item">
						      <div><li>Project management:</li></div>
						      <div><p style={{marginLeft:"5px"}}> Expert</p></div>
						
					      </div>
				      </div>
				</div>
				
				<div className="language__container">
					<p style={{marginTop:"20px"}}>Language</p>
					<div className="language__container__content">
						<div className="language__container__title">
							<div><p style={{fontWeight:"bold"}}>English</p></div>
						</div>
						<div className="language__container__level">
							<div><p style={{fontWeight:"bolder"}}>Native</p></div>
						</div>
					</div>
				</div>

			</section>

			<section className="interest">
			<div className="interest__container">
					<p>Interests</p>
					<div className="interest__container__content">
						<div className="interest__container__title">
							<div><li style={{fontWeight:"bold"}}>Travel</li></div>
						</div>
						
					</div>
				</div>
			</section>  
			

		</div>
	)
	
}


export default ResumeOne
