import React, { Component } from "react";
import logo from "../../static/logos/loco-moco-horizontal.png";

import NavBar from 'responsive-react-js-navbar';
import "./NavBar.css";
import SecondaryNav from "./SecondaryNav";

export default class NavBar2 extends Component {
	static displayName = "NavBar";

	render() {
    const links = [{
      "href": "/",
      "label": "Home",
      "background": false,
    },
    {
        "href": "https://www.eventbrite.com/e/loco-moco-product-security-conference-tickets-268236260877",
        "label": "Register",
        "background": false,
    },
    {
        "href": "https://sessionize.com/locomocosec-2021/?e=4964e7",
        "label": "CFP",
        "background": false,
    },
    {
        "href": "/venue",
        "label": "Venue",
        "background": false,
    },
    {
        "href": "/sponsors",
        "label": "Sponsors",
        "background": false,
    },
    {
        "href": "https://hawaiicovid19.com/travel/",
        "label": "Safety",
        "background": false,
    },
    {
        "href": "/about",
        "label": "About",
        "background": false,
    }]
    
		return (
      <>
        <NavBar
          logo={logo}
          logoHref='/'
          links={links}
        />
        <SecondaryNav/>
      </>


			// <div className="navbar">
			// 	<div className="container">
			// 		<a href="/">
			// 			<img
			// 				src={logo}
			// 				className="navbar-logo"
			// 				height="25"
			// 				alt="locomocosec logo"
			// 			/>
			// 			<p className="nav-dates">Jun 27 - Jun 30, 2022</p>
			// 		</a>
			// 	</div>
			// </div>
		);
	}
}
