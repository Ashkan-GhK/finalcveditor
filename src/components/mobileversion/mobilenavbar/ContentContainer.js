import React, { useState, useEffect } from 'react'
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

	const [mySection, setMySection] =useState("");


	useEffect (() => {

         setMySection(showEditorItems)
         console.log(mySection)
	},[showEditorItems ])
	

	return (
		<div className="contentContainer">
		<div className="contentContainer__content">
		

                  {mySection === 'contact' ? <ContactForm />  : null ||
                  mySection === 'objective' ? <Objective /> : null ||
                  mySection === 'work experience' ? <WorkExperience /> : null||
                  mySection === 'education' ? <Eduacation /> : null ||
                  mySection === 'skills' ? <Skills /> : null ||
                  mySection === 'language' ? <Language /> : null ||
                  mySection === 'interest' ? <Interest /> : null}
                </div>
		</div>
	)
}

export default ContentContainer
