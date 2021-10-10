import React from 'react';
import { useSelector } from 'react-redux';
import '../mobileversion/MobileBody.css';
import ContentContainer from './mobilenavbar/ContentContainer';
import MobileNavbar from './mobilenavbar/MobileNavbar';

function MobileBody() {



    return (
        <div className="mobilebody">
            {/* NAVBAR MENU*/}
            <MobileNavbar />

            
            {/* CONTENT CONTAINER */}
            
            <ContentContainer />

                     {/* CV TEMPLATE */}

                     {/* CV EDITOR */}

                     {/* CV PREVIEW */}




            {/* FOOTER MENU */}


        </div>
    )
}

export default MobileBody
