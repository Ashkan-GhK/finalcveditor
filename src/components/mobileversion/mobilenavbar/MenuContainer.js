import React, {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../mobilenavbar/MenuContainer.css';

function MenuContainer() {

    const dispatch = useDispatch();    
    const showEditorItems = useSelector(state => state.editorMobile);
    // const closeMenuItems = useSelector(state => state.closeMenuItems);
    
    const [isOpen, setIsOpen] = useState(true);
    const[navTitle, setNavTitle] = useState('CV Templates');
    const[menuEditSection, setMenuEditSection] = useState(showEditorItems);
    // const[isClosed, setIsClosed]=useState(true);
    

    function menuItems(e) {
	   setIsOpen(!isOpen); 
       setMenuEditSection(!menuEditSection)

            
        dispatch({
            type: 'SHOW_MENU_ITEMS',
            isOpen: isOpen
        },
        
        )     
    }

    // I AM WORKING ON THIS PART TO BE ABLE TO CLOSE THE MENU IF THE EDITOR BUTTON GET CLICKS ******
    
    useEffect(()=>{
	    setNavTitle(showEditorItems)	
    }, [showEditorItems, navTitle, isOpen, menuEditSection])


	return (
             <div className="menuContainer">
                <div className="menuContainer__left">
                {/* <p >{!mySection ? "CV Templates" : mySection}</p> */}
		<p style={{marginLeft:"10px"}}>{navTitle ? navTitle : "CV Templates"}</p>
                </div>
                <div className="menuContainer__right">
                    <div className="menuContainer__right__expand">
                    <button value="showitems" onClick={menuItems} > <img className={isOpen? "open__menu__arrow": "close__menu__arrow"}  style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" /></button>
                    
                    </div>
                </div>
                
            </div>
        )
}



export default MenuContainer
