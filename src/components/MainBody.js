import React, { useEffect, useState } from 'react'
import '../styles/MainBody.css'
import '../styles/Sidebar.css'

// import PersonIcon from '@material-ui/icons/Person';
// import GolfCourseIcon from '@material-ui/icons/GolfCourse';
// import WorkIcon from '@material-ui/icons/Work';
// import SchoolIcon from '@material-ui/icons/School';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import LanguageIcon from '@material-ui/icons/Language';
// import GamesIcon from '@material-ui/icons/Games';
import ContactForm from '../components/contactdetails/ContactForm'
import Objective from '../components/objective/Objective';
import CvTemplates from './CvTemplates';
import WorkExperience from '../components/workexperience/WorkExperience';
import Education from '../components/education/Eduacation';
import Language from '../components/language/Language';
import Interest from '../components/interest/Interest';
import Skills from '../components/skills/Skills';
import ResumeOne from './resumes/resumeone/ResumeOne';



function MainBody({data}) {

    const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];

    const [mySection, setMySection] = useState('')




   
    
   
return (
        <div className='mainBody'>
           <div className="sidebar">
                <div  className="siderbaar__button">

                    {sections.map(section => (
                        <button
                           type="button"
                           key={section}
                           className={"sidebar__section"}
                           onClick={() => setMySection( section )}
                        >
                            {section.toLocaleUpperCase()}
                        </button>   
                    ))}
                </div>
                </div>
            {/* Left Section */}
            <div className="mainbody__left">
                <div className="editor__preview">
                     {/* < CvTemplates  />  */}
                    {!mySection? <CvTemplates/> : null ||
                   mySection === 'contact' ? <ContactForm /> : null ||
                   mySection === 'objective' ? <Objective /> : null ||
                   mySection === 'work experience' ? <WorkExperience /> : null||
                   mySection === 'education' ? <Education /> : null ||
                   
                   mySection === 'skills' ? <Skills /> : null ||
                   mySection === 'language' ? <Language /> : null ||
                   mySection === 'interest' ? <Interest /> : null}
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
