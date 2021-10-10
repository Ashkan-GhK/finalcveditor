import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../mobilenavbar/MenuContainer.css';

function MenuContainer() {

    const dispatch = useDispatch();    
    const [isOpen, setIsOpen] = useState(false);
//     function showEditorMobile(e) {
//         const btnValue = (e.target.value)
//         // console.log(btnValue);

//         dispatch({
//             type: 'SHOW_EDITOR_MOBILE',
//             editorMobile: editorMobile
//         })     
//     }



	return (
             <div className="menuContainer">
                <div className="menuContainer__left">
                {/* <p style={{display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"20px"}}>{!mySection ? "CV Templates" : mySection}</p> */}
		<p style={{marginLeft:"10px"}}>CV selector</p>
                </div>
                <div className="menuContainer__right">
                    <div className="menuContainer__right__expand">
                    <button onClick={() => setIsOpen(!isOpen)}> <img className={isOpen? "close__menu__arrow":"open__menu__arrow"} style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" /></button>
                    
                    </div>
                </div>
                
            </div>
    )
}



export default MenuContainer
