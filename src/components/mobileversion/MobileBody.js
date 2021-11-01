import React,{ useEffect } from 'react';
import '../mobileversion/MobileBody.css';
import ContentContainer from './mobilenavbar/ContentContainer';
// import MenuItems from './mobilenavbar/MenuItems';
// import MobileNavbar from './mobilenavbar/MobileNavbar';
import FooterMobile from '../../FooterMobile';
import CvTemplates from '../CvTemplates';
import { useSelector } from 'react-redux';
import MenuItems from './mobilenavbar/MenuItems';
// import ResumeOne from '../resumes/resumethree/CvThree';
import CvThree from '../resumes/resumethree/CvThree';
import MenuContainer from './mobilenavbar/MenuContainer';
function MobileBody() {

    const showEditorItems = useSelector(state => state.editorMobile);

	const showMenuItems = useSelector(state => state.isOpen);

    const showCvTemp = useSelector(state => state.showCvItem);

    const showEditor = useSelector(state => state.showEditorFooter);
    
    const showCvPreview = useSelector(state => state.showPreviewItem);

    useEffect(() => {
        console.log(showEditorItems)
        console.log(showMenuItems)
        console.log(showCvTemp)
        console.log(showEditor)
        console.log(showCvPreview)
    }, [showCvPreview, showCvTemp, showEditor, showEditorItems, showMenuItems])


    return (
        <div className="mobilebody">
            {/* CHANGES IN 1 NOV TO PASTE MOBILENAVBAR INSIDE, INSTEAD OF USING IT AS A COMPONENT*/}
            <MenuContainer />
            <MenuItems />
            {/* <MobileNavbar/> */}
            {/* CONTENT CONTAINER */}
            
           {showMenuItems && <ContentContainer /> } 
            {showCvTemp && <CvTemplates />}
            {showEditor ? <ContentContainer/> : null}
            {showCvPreview && <CvThree/>}
            

                     {/* CV TEMPLATE */}

                     {/* CV EDITOR */}

                     {/* CV PREVIEW */}




            {/* FOOTER MENU */}
            <FooterMobile />


        </div>
    )
}

export default MobileBody
