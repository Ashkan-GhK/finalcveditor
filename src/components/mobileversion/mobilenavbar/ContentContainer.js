import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../../contactdetails/ContactForm';
import Eduacation from '../../education/Eduacation';
import Interest from '../../interest/Interest';
import Language from '../../language/Language';
import Objective from '../../objective/Objective';
import Skills from '../../skills/Skills';
import WorkExperience from '../../workexperience/WorkExperience';


function ContentContainer() {

	const showEditorItems = useSelector(state => state.editorMobile);




	

	return (
		<div className="contentContainer">
		<div className="contentContainer__content">
		
		  
                  {showEditorItems === 'contact' ? <ContactForm />  : null ||
                  showEditorItems === 'objective' ? <Objective /> : null ||
                  showEditorItems === 'work experience' ? <WorkExperience /> : null||
                  showEditorItems === 'education' ? <Eduacation /> : null ||
                  showEditorItems === 'skills' ? <Skills /> : null ||
                  showEditorItems === 'language' ? <Language /> : null ||
                  showEditorItems === 'interest' ? <Interest /> : null}
                </div>
		</div>
	)
}

export default ContentContainer
