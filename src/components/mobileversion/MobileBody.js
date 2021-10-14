import React from 'react';
import '../mobileversion/MobileBody.css';
import ContentContainer from './mobilenavbar/ContentContainer';
// import MenuItems from './mobilenavbar/MenuItems';
import MobileNavbar from './mobilenavbar/MobileNavbar';
import FooterMobile from '../../FooterMobile';
import CvTemplates from '../CvTemplates';
import { useSelector } from 'react-redux';
function MobileBody() {

    const showEditorItems = useSelector(state => state.editorMobile);

	const showMenuItems = useSelector(state => state.isOpen);


    return (
        <div className="mobilebody">
            {/* NAVBAR MENU*/}
            <MobileNavbar/>
            {/* CONTENT CONTAINER */}
            
            {showMenuItems && <ContentContainer /> }
            {!showEditorItems && <CvTemplates />}


                     {/* CV TEMPLATE */}

                     {/* CV EDITOR */}

                     {/* CV PREVIEW */}




            {/* FOOTER MENU */}
            <FooterMobile />


        </div>
    )
}

export default MobileBody
