import React,{ useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import './MenuItems.css';

function MenuItems() {

	const showMenuItems = useSelector(state => state.isOpen);

	const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];

	const [mySection, setMySection] = useState(null);

	function handleClick(e) {
		const btnValue = (e.target.value)
		// console.log(btnValue);
		setMySection(btnValue);
		console.log(mySection);
		// setEditorMobile("editorMobile")
	
		// dispatch({
		//     type: 'SHOW_EDITOR_MOBILE',
		//     editorMobile: editorMobile
		//   })
	      
	
	    }
	    useEffect(() => {

		console.log(showMenuItems)
	    },[showMenuItems])



	return (
		<div className="menuitems">  

                       {!showMenuItems && <div className="menuitems__container">
                                <div className="menuitems__section__buttons">
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
		        </div>}
            
                </div>
	)
}

export default MenuItems
