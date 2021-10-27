import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles/FooterMobile.css';

function FooterMobile() {

	const dispatch = useDispatch();

	const [showCvItem, setShowCvItem] = useState('cvtemplates');
	const [showEditorFooter, setShowEditorFooter] = useState('editor');
	const [showPreviewItem, setShowPreviewItem] = useState('preview');
	
	const showCvTemp = (e) => {
		const btnValue = e.target.value;
		console.log(btnValue)
		if(btnValue ==="cvtemplates") {
			setShowCvItem(btnValue)
			console.log(showCvItem)
	 	} else {
			 return null
		}
		dispatch({
			type:"SHOW_CVTEMP_ITEM",
			showCvItem: showCvItem
		})
	}


	const showEditor = (e) => {
		const btnValue = e.target.value;
		console.log(btnValue)

		if(btnValue ==="editor") {
			setShowEditorFooter(btnValue)
			console.log(btnValue)
		} else {
			return null
	       }
		dispatch({
			type:"SHOW_EDITOR_FOOTER",
			showEditorFooter: showEditorFooter
	       })
	}


	const showPreview = (e) => {
		const btnValue = e.target.value;
		console.log(btnValue)
		if (btnValue ==="preview") {
		       setShowPreviewItem(btnValue)
		       console.log(btnValue)
		} else {
			return null
	       }
	       
		dispatch({
			type:"SHOW_PREVIEW_ITEM",
			showPreviewItem: showPreviewItem
		})
	}


		
	 	

	return (
		<div className="footermobile">
                    <div className="footermobile__menu__item__container">
			<div className="footermobile__item"><button className="footermobile__item__cvtemplate" onClick={showCvTemp} value={"cvtemplates"}>Cv templates</button></div>  
			<div className="footermobile__item"><button className="footermobile__item__editor" onClick={showEditor} value={"editor"}>Editor</button></div> 
			<div className="footermobile__item"><button className="footbarmobile__item__preview" onClick={showPreview} value={"preview"}>Preview</button></div>                        
                    </div>
                </div>
	)
}

export default FooterMobile;
