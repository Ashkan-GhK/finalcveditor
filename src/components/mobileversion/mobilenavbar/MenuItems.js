import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MenuItems.css';

function MenuItems() {

	const showMenuItems = useSelector(state => state.isOpen);
	

	

	const dispatch = useDispatch();

	const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];


	const [closeMenuItems, setCloseMenuItems] = useState(sections)


	

	function handleClick(e) {
		
		const editorMobile = e.target.value;
		console.log(editorMobile)
		setCloseMenuItems(!closeMenuItems)
		
		
		dispatch({
		    type: 'SHOW_EDITOR_ITEM',
		    editorMobile: editorMobile
		  });
		dispatch({
			type: 'CLOSE_MENU-ITEMS',
			closeMenuItems: closeMenuItems
		  })
		  console.log(closeMenuItems)
	}
	    
	

	


	return (
		<div className='menuitems'>  

                        {showMenuItems ? <div className="menuitems__container">
                                < div  className="menuitems__section__buttons">
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
		        </div> : !showMenuItems }
            
                </div>
	)
}

export default MenuItems
