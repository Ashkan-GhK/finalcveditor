import '../resumeone/ResumeOne.css';
import { useState } from 'react';
import blackimg from '../../../image/blackimg.png';
import {useSelector} from 'react-redux';

function ResumeOne() {
	const[name] =useState("Alex")

	const showUserInput = useSelector(state => state.input);
	
	return (
		<div className="resumeone">
			<header className="resumeone__header">
				<div className="resumeone__header__left">
					<div className="resumeone__name">
					 <p>{showUserInput.length-1 >= 0 ? showUserInput : "Alex"} Gakan</p>
					</div>
				</div>
				<div className="resumeone__header__right__container">
				        <div className="resumeone__header__right">
					        <div className="resumeone__header__right__content">
						        <span>Email</span>
						        <p>
							alex@gmail.com
							</p>
					         </div>
					        <div className="resumeone__header__right__content break">
						        <span>Address</span>
						        <p>42 B Fulham Palace Road w6 9ph</p>
					        </div>
					        <div className="resumeone__header__right__content">
						        <span>Phone</span>
						        <p>+447712126669</p>
					        </div>
				        </div>
					<div className="resumeone__header__img">
					        <img  width="80px" src={blackimg} alt="img" />					
					</div>
			        </div>
			</header>
			
			<section className="objective">
				<div className="objective__container">
					<div className="objective__title">
						<p>Objective</p>
					</div>
					<div className="objective__content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>				
			</section>

			<section className="workexperience">
				<p className="workexperience__title">Work Experience</p>
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
							<div style={{display:"flex", fontWeight:"bolder"}}>
							        <div>Sep</div>
								<div>2021</div>
							</div>
							<div style={{display:"flex", padding:"0 2px", fontWeight:"bold"}}>/</div>
							<div style={{display:"flex", fontWeight:"bolder"}}>
							        <div>Sep</div>
								
								<div>2021</div>
							</div>
						</div>
					</div>
					<div className="workexperience__content__right">
						<div className="workexperience__content__right__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
					</div>
					
				</div>

			</section>
			
			{/* EDUCATION */}

			<section className="workexperience">
				<p className="workexperience__title">Education</p>
				<div className="workexperience__content">
					<div className="workexperience__content__left">
						<div className="workexperience__content__left__job">
							<p>Msc Computer Science</p>
						</div>
						<div className="workexperience__content__left__place">
							<div>
							        <span>University of Bristol</span>
							</div>
							<div style={{fontWeight:"bolder"}}>
							        <p>Bristol</p>
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
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
					</div>
					
				</div>

			</section>

			<section className="skills__Language">
				<div className="skills__container">
				      <p style={{marginTop:"20px"}}>Skils</p>
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
