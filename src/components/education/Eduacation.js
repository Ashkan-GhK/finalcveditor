import React, { useEffect, useState } from 'react';
import '../../styles/workexperience/WorkExperience.css';

function Education() {


	const[addWork, setAddWork] = useState('')

	




	function workEditor(e){

		setAddWork(e.target.value)
		console.log(addWork)
	}
	

	return (
		<div className="workexperiences">
			<div className="workexperiences__title">
			<p>Education</p>	
			</div>
			<div className="workexperiences__container">
				<div className="workexperiences__container__content">
					<div className="workexperiences__content__add">
						<div className="workexperiences__content__add__top">
							<div style={{width:"90%", marginButton:"20px"}} className="worexperiences__content__box">
							     <div className="workexperiences__content__box__left">
								     <p style={{transform:"rotate(90deg)", margin:"30px", fontSize:"18px", color:"grey"}}>|||</p>
							     </div>
							     <div className="workexperiences__content__box__middle">
								     <div className="content__box__middle__position">
									     <p>University of London</p>
								     </div>
								     <div className="content__box__middle__company">
									     <p>Computer Science</p>
								     </div>
							     </div>
							     <div className="workexperiences__content__box__right">
								     <p style={{transform:"rotate(45deg)", margin:"30px", fontSize:"18px", color:"grey"}}>+</p>
							     </div>

							</div>
							
							<div className="add__top__btn">
								<button value="openworkeditor" onClick={workEditor}>ADD</button>
							</div>
						</div>
						<div className="workexperiences__content__add__bottom">
							<div className="add__back__btn">
							<button>GO BACK</button>
							</div>
							<div className="add__next__btn">
								<button>NEXT</button>
							</div>

						</div>						

					</div>
				</div>
			</div>
		</div>
	)
}

export default Education

