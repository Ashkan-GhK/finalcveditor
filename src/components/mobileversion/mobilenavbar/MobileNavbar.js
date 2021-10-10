import React from 'react';
import MenuContainer from './MenuContainer';
import MenuItems from './MenuItems';
import './MobileNavbar.css';
function MobileNavbar() {
	return (
		<div className="mobileNavbar">
			{/* MENU CONTAINER */}
			<MenuContainer />

			{/* MENU ITEMS */}
			<MenuItems />
		</div>
	)
}

export default MobileNavbar;
