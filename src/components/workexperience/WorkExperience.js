import React from 'react';
import '../../styles/workexperience/WorkExperience.css';

function WorkExperience() {
	return (
		<div className="workexperiences">
			<div className="workexperiences__title">
			<p>Work Experience</p>	
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
									     <p>Product Manager</p>
								     </div>
								     <div className="content__box__middle__company">
									     <p>Deliveroo</p>
								     </div>
							     </div>
							     <div className="workexperiences__content__box__right">
								     <p style={{transform:"rotate(45deg)", margin:"30px", fontSize:"18px", color:"grey"}}>+</p>
							     </div>

							</div>
							<div style={{width:"90%", marginButton:"20px"}} className="worexperiences__content__box">
							     <div className="workexperiences__content__box__left">
								     <p style={{transform:"rotate(90deg)", margin:"30px", fontSize:"18px", color:"grey"}}>|||</p>
							     </div>
							     <div className="workexperiences__content__box__middle">
								     <div className="content__box__middle__position">
									     <p>Product Manager</p>
								     </div>
								     <div className="content__box__middle__company">
									     <p>Deliveroo</p>
								     </div>
							     </div>
							     <div className="workexperiences__content__box__right">
								     <p style={{transform:"rotate(45deg)", margin:"30px", fontSize:"18px", color:"grey"}}>+</p>
							     </div>
							     
							</div>
							<div className="add__top__btn">
								<button>ADD</button>
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

export default WorkExperience
