import React, { useEffect, useState } from 'react'
import '../styles/MainBody.css'
import '../styles/Sidebar.css'
import {useSelector} from 'react-redux';
import ContactForm from '../components/contactdetails/ContactForm'
import Objective from '../components/objective/Objective';
import CvTemplates from './CvTemplates';
import WorkExperience from '../components/workexperience/WorkExperience';
import Education from '../components/education/Eduacation';
import Language from '../components/language/Language';
import Interest from '../components/interest/Interest';
import Skills from '../components/skills/Skills';
import ResumeOne from './resumes/resumeone/ResumeOne';




function MainBody() {

    const showCvTempComponent = useSelector(state => state.cvTempSelection);

    const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];

    const [mySection, setMySection] = useState(null);
    
    const handleClick = (e) => {
       
        setMySection(e.target.value)
        // console.log(mySection)
        if(showCvTempComponent==='cvTemplates') {
            setMySection(null) 
        }
        
    }
useEffect((e) => {
 if(showCvTempComponent==='cvTemplates') {
    console.log('oooops')
    setMySection('cvTemplates')
 } else if (showCvTempComponent=== null && mySection==='contact') {
     console.log('jiiip') 
     setMySection('contact')
 }
 console.log(showCvTempComponent)
//AFTER PAGE LOADS(SHOCVTEMPCOMPONENT:UNDEFINE/MYSECTION: NULL), 
//AND AFTER CLICK ON SIDEBAR, --*SHOWCVTEMPCOMPONENTS BECOME NULL && 
//MYSECTION BECOME BTNVALU*--  AFTER CLICK ON CV TEMPLATE BTN  
//--*SHOWCVTEMPCOMPONENT 'CVTEMPLATES' && MYSECTION BECOME NULL
 console.log(mySection)
},[showCvTempComponent, mySection])

   
   
   
return (
        <div className='mainBody'>
           <div className="sidebar">
                <div  className="siderbaar__button">

                    {sections.map(section => (
                        <button
                           type="button"
                           key={section}
                           value={section}
                           className={"sidebar__section"}
                           onClick={handleClick}
                        >
                            {section.toLocaleUpperCase()}
                        </button>   
                    ))}
                </div>
                </div>
            {/* Left Section */}
            <div className="mainbody__left">
            <div className="editor__preview">
                    {mySection===null  && <CvTemplates/>}
                    {mySection==='cvTemplates' && <CvTemplates/>}
                    {mySection==='content' && <ContactForm />}
                    
                
                      
                  {/* {mySection === 'contact'  ? <ContactForm /> : null ||
                  mySection === 'objective' ? <Objective /> : null ||
                  mySection === 'work experience' ? <WorkExperience /> : null||
                  mySection === 'education' ? <Education /> : null ||
                  mySection === 'skills' ? <Skills /> : null ||
                  mySection === 'language' ? <Language /> : null ||
                  mySection === 'interest' ? <Interest /> : null} */}
                </div>
            </div>
            
            
            {/* Right Section */}
            <div className="mainbody__right">
                <div className="cv__preview">
                    <ResumeOne />
                </div>
            </div>
            

        </div>
    )
}

export default MainBody
