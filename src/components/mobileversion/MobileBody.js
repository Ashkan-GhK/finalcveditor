import React from 'react';
import '../mobileversion/MobileBody.css';
import ContentContainer from './mobilenavbar/ContentContainer';
// import MenuItems from './mobilenavbar/MenuItems';
import MobileNavbar from './mobilenavbar/MobileNavbar';
import FooterMobile from '../../FooterMobile';
import CvTemplates from '../CvTemplates';
import { useSelector } from 'react-redux';
import MenuItems from './mobilenavbar/MenuItems';
import ResumeOne from '../resumes/resumeone/ResumeOne';
function MobileBody() {

    const showEditorItems = useSelector(state => state.editorMobile);

	const showMenuItems = useSelector(state => state.isOpen);

    const showCvTemp = useSelector(state => state.showCvItem);

    const showEditor = useSelector(state => state.showEditorFooter);
    
    const showCvPreview = useSelector(state => state.showPreviewItem);

    


    return (
        <div className="mobilebody">
            {/* NAVBAR MENU*/}
            <MobileNavbar/>
            {/* CONTENT CONTAINER */}
            
            {/* {showMenuItems && <ContentContainer /> } */}
            {showCvTemp && <CvTemplates />}
            {showEditor ? <ContentContainer/> : null}
            {showCvPreview && <ResumeOne/>}

                     {/* CV TEMPLATE */}

                     {/* CV EDITOR */}

                     {/* CV PREVIEW */}




            {/* FOOTER MENU */}
            <FooterMobile />


        </div>
    )
}

export default MobileBody
