import React,{ useState } from 'react'
import '../../styles/objective/Objective.css';
import {useDispatch} from 'react-redux';

function Objective() {

	const dispatch = useDispatch();

	const [objective, setObjective] = useState("");
        const [objectiveVal, setObjectiveVal] = useState("");
        const handleTextarea = event => {
             setObjective(event.target.value);
        };

        let objectiveValue = () => {
          console.log(objectiveVal)
          setObjectiveVal(objective)
        };
        function showObjective (objective) {
          dispatch({
            type: 'SHOW_OBJECTIVE',
            objective: objective
          })
        }




	return (
		<div className="objectives">
			<div className="objectives__container">
				<p style={{margin:"20px", fontWeight:"bolder", color:"#4373fe" }}>What is your Objectives?</p>
				<div className="objectives__container__content">
					<p style={{margin:"20px", wordBreak:"break-word" }}>e.g. Would like to gain the necessary
						experience to hopefully become Operations
						Manager of all services running across the
						platform
					</p>
				</div>
				<div className="objectives__container__content">
					<textarea onChange={handleTextarea} name="objectives" placeholder="My Objectives ..." id="" cols="18" rows="10"></textarea>
					<p onChange={objectiveValue}>{showObjective(objective)}</p>
				</div>
				<div  className="objectives__container__content objectives__buttons">
					<div className="goback__button">
						<button>GO BACK</button>
					</div>
					<div className="next__button">
						<button>NEXT</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Objective
