import React, { useEffect, useState } from 'react';
import './components/mobileversion/mobilenavbar/MenuContainer.css';
import './components/mobileversion/mobilenavbar/MenuItems.css';
import './styles/FooterMobile.css';
import './styles/MobileVersion.css';
import CvTemplates from './components/CvTemplates';
import ContactForm from './components/contactdetails/ContactForm';
import Objective from './components/objective/Objective';
import Language from './components/language/Language';
import Skills from './components/skills/Skills';
import WorkExperience from './components/workexperience/WorkExperience';
import Education from './components/education/Eduacation';
import Interest from  './components/interest/Interest';
import CvThree from './components/resumes/resumethree/CvThree';


function MobileVersion() {

	const [isOpen, setIsOpen] = useState(true);
	const[navTitle, setNavTitle] = useState('CV Templates');
	const[closeMenu,setCloseMenu] = useState('close')
	const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];
	const [mySection, setMySection] = useState();

	function menuItems(e) {
		setIsOpen(!isOpen);
		setMySection('')  	
	 }
	function handleClick(e) {
		setMySection(e.target.value);
		setIsOpen(true)
		const editorMobile = (e.target.value.toUpperCase());
		setNavTitle(editorMobile)
		console.log(editorMobile)
	}


	// FOOTER 
	
	const showCvTemp = (e) => {
		setMySection('showCvTemp')

	}
	const showEditor = () => {
		setMySection('showEditor')	
	}
	const showPreview = () => {
		setMySection('cvPreview')
	}


	useEffect(() => {
		if(mySection) {
			setIsOpen(true)
		}

	},[isOpen, mySection, navTitle])
	    
	return (
		<div className="mobileversion">
			<div className="mobileversion__container">
				{/* MOBILE VERSION HEADER MENU */}
				<div className="menuContainer">
                                        <div className="menuContainer__left">
		                                <p style={{marginLeft:"10px"}}>{navTitle ? navTitle : "CV Templates"}</p>
                                        </div>
                                <div className="menuContainer__right">
                                        <div className="menuContainer__right__expand">
                                                <button  onClick={menuItems} > <img className={isOpen? "open__menu__arrow": "close__menu__arrow"}  style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" /></button>
                                        </div>
                                </div>
                
                                </div>
				<div className='menuitems'>  

                                        {!isOpen ? <div className="menuitems__container">
                                        <div  className="menuitems__section__buttons">
                                                {sections.map(section => (
                                                <button
                                                        type="button"
                                                        key={section}
                                                        value={section}
                                                        className={"sidebar__section"}
                                                        onClick={handleClick}>
                                                        {section.toLocaleUpperCase()}
                                                </button>   
                                                ))}
                                        </div>
		                                    </div> : isOpen }
            
                               </div>




				{/* MOBILE VERSION BODY */}
				<div className="contentContainer">
		<div className="contentContainer__content">
		  {!mySection && <CvTemplates />}
		  {mySection === 'cvPreview' ? <CvThree /> : null ||
		  mySection === 'showEditor' ? <ContactForm /> : null ||
		  mySection === 'showCvTemp' ? <CvTemplates /> : null ||
                  mySection === 'contact' ? <ContactForm />  : null ||
                  mySection === 'objective' ? <Objective /> : null ||
                  mySection === 'work experience' ? <WorkExperience /> : null||
                  mySection === 'education' ? <Education /> : null ||
                  mySection === 'skills' ? <Skills /> : null ||
                  mySection === 'language' ? <Language /> : null ||
                  mySection === 'interest' ? <Interest /> : null}
                </div>
		</div>



				{/* MOBILE VERSION FOOTER MENU */}


		               <div className="footermobile">
                                        <div className="footermobile__menu__item__container">
			                        <div className="footermobile__item"><button className="footermobile__item__cvtemplate" onClick={showCvTemp} value={"cvtemplates"}>Cv templates</button></div>  
			                        <div className="footermobile__item"><button className="footermobile__item__editor" onClick={showEditor} value={"editor"}>Editor</button></div> 
			                        <div className="footermobile__item"><button className="footbarmobile__item__preview" onClick={showPreview} value={"preview"}>Preview</button></div>                        
                                        </div>
                               </div>
			</div>
		</div>
	)
}

export default MobileVersion
