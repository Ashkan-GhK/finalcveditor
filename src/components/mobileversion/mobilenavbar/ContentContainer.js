import React, { useEffect, useState } from 'react';
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
	const closeMenuItems = useSelector(state => state.closeMenuItems);

	const showMenuItems = useSelector(state => state.isOpen);


	const [closeEditorSection, setCloseEditorSection] = useState(closeMenuItems)


	// useEffect((closeEditorSection) => {
	// 	if(showMenuItems) {
	// 		setCloseEditorSection(!showMenuItems)
	// 	}
	// 	console.log(closeEditorSection)
	// },[closeEditorSection])



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
