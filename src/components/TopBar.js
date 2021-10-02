import React, { useState } from 'react'
import '../styles/TopBar.css'

function TopBar() {


    return (
        <div className='topBar'>
        
            {/* Left Side */}
            <div className="topBar__left">
                <div className="topBar__left__button">
                    <button className='cvtemp'>CV Template</button>
                </div>
                <div className="topBar__left__input">
                    <input type="My CV"/>
                </div>
            </div>


            {/* Left Side */}

            <div className="topBar__right">
                <div className="topBar__left__button">
                    <button className='sharebtn'>SHARE</button>
                </div>
                <div className="topBar__left__button">
                    <button className='downloadbtn'>DOWNLOAD MY CV</button>
                </div>
                <div className="topBar__left__button">
                    <button className='savebtn'>SAVE</button>
                </div>
            </div>

        </div>
    )
}

export default TopBar
