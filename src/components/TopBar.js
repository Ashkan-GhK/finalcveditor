import React, { useState } from 'react';
import '../styles/TopBar.css';
import { useDispatch } from 'react-redux';

function TopBar() {

    const dispatch = useDispatch();

    
    const [cvTempSelection, setCvTempSelection] = useState('cvTemplates');
    
    function showCvTempComponent (e) {
        e.preventDefault();
        setCvTempSelection(null)

        // console.log(cvTempSelection)
        dispatch({
          type: 'SHOW_CVTEMPLATES',
          cvTempSelection: cvTempSelection
        })
    }
    
   
   
    return (
        <div className='topBar'>
            {/* Left Side */}
            <div className="topBar__left">
                <div className="topBar__left__button">
                    <button  type="button" 
                       value={"cvTemplates"}
                       onClick={showCvTempComponent}
                       className='cvtemp'>
                        CV Template
                    </button>
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

export default TopBar;
