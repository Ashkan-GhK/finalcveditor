import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/contactdetails/ContactForm'
import Objective from '../components/objective/Objective';
import CvTemplates from './CvTemplates';
import WorkExperience from '../components/workexperience/WorkExperience';
import Education from '../components/education/Eduacation';
import Language from '../components/language/Language';
import Interest from '../components/interest/Interest';
import Skills from '../components/skills/Skills';
import ResumeOne from './resumes/resumeone/ResumeOne';
import '../styles/Header.css';
import { getByDisplayValue } from '@testing-library/dom';


function Header() {


    // const dispatch = useDispatch();

    // const sectionValue = ["editorMobile"]
    
    // const [editorMobile, setEditorMobile] = useState("");
    



    // const [isOpen, setIsOpen] = useState(false);

    // const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];

    // const [mySection, setMySection] = useState(null);



    // function handleClick(e) {
    //     const btnValue = (e.target.value)
    //     // console.log(btnValue);
    //     setMySection(btnValue);
    //     console.log(mySection);
    //     setEditorMobile("editorMobile")

    //     dispatch({
    //         type: 'SHOW_EDITOR_MOBILE',
    //         editorMobile: editorMobile
    //       })
      

    // }



    return (
        <div className='header'>
            <h4>GhK Editor</h4>
            {/* <div className="topbar__dropdown__selector">
                <div className="topbar__dropdown__left">
                <p style={{display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"20px"}}>{!mySection ? "CV Templates" : mySection}</p>
                </div>
                <div className="topbar__dropdown__right">
                    <div className="topbar__dropdown__right__expand">
                    <button onClick={() => setIsOpen(!isOpen)}> <img className={isOpen? "close__menu__arrow":"open__menu__arrow"} style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" /></button>
                    
                    </div>
                </div>
                
            </div>
            <div className={isOpen? "topbar__dropdown__menu__container__open" : "topbar__dropdown__menu__container__close"}>
            <div className="show__editor__section">
                    </div>
                <div className="topbar__dropdown__menu">
                    <div className="topbar__dropdown__menu__item">
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
            </div> */}
            
        </div>
    )
}

export default Header;
