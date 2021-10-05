import React, { useState } from 'react';
import '../styles/Header.css';


function Header() {

    const [isOpen, setIsOpen] = useState(false);


    const sections = ["contact", "objective", "work experience", "education", "skills", "language", "interest" ];

    const [mySection, setMySection] = useState('');
    const [showCv, setShowCv] =useState("")

   


    return (
        <div className='header'>
            <h4>GhK Editor</h4>
            <div className="topbar__dropdown__selector">
                <div className="topbar__dropdown__left">
                <p style={{display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"20px"}}>CV templates</p>
                </div>
                <div className="topbar__dropdown__right">
                    <div className="topbar__dropdown__right__expand">
                    <button onClick={() => setIsOpen(!isOpen)}> <img className={isOpen? "close__menu__arrow":"open__menu__arrow"} style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" /></button>
                    </div>
                </div>
                
            </div>
            <div className={isOpen? "topbar__dropdown__menu__container__open" : "topbar__dropdown__menu__container__close"}>
                <div className="topbar__dropdown__menu">
                    <div className="topbar__dropdown__menu__item">
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
            </div>
            
        </div>
    )
}

export default Header
