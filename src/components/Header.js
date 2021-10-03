import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <div className='header'>
            <h4>GhK Editor</h4>
            <div className="topbar__dropdown__selector">
                <div className="topbar__dropdown__left">
                <p style={{display:"flex", justifyContent:"center", alignItems:"center",marginLeft:"20px"}}>CV templates</p>
                </div>
                <div className="topbar__dropdown__right">
                    <div className="topbar__dropdown__right__expand">
                    <img style={{width:"30px", float:"right"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png" alt="expand" />
                    </div>
                </div>

            </div>
            <div className="topbar__dropdown__menu__container">
                <div className="topbar__dropdown__menu">
                    <div className="topbar__dropdown__menu__item">Contact details</div>
                    <div className="topbar__dropdown__menu__item">Objective</div>
                    <div className="topbar__dropdown__menu__item">Work Experience</div>
                    <div className="topbar__dropdown__menu__item">Education</div>
                    <div className="topbar__dropdown__menu__item">Skills</div>
                    <div className="topbar__dropdown__menu__item">Languages</div>
                    <div className="topbar__dropdown__menu__item">Interests</div>
                </div>
            </div>
        </div>
    )
}

export default Header
