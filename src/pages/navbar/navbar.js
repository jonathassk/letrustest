import React, { Component } from 'react';
import Logo from '../../images/RV-logo.svg';
import './cssNavbar.css';

class Navbar extends Component{
	render(){
		return(
			<div className="containernavPrincipal">
				<div className="ContainerNav">
					<div className="logo">
						<img src={Logo} alt="logo"/>
					</div>
					<div className="options">
						<button><p className="buttontextSelected">Model R</p></button>
						<button><p className="buttontext">Model IQ</p></button>
						<button><p className="buttontext">Model Mobi</p></button>
						<button><p className="buttontext">Model Charlie</p></button>
						<button><p className="buttontext">Model Italy</p></button>					
					</div>						
				</div>
			</div>
		);
	}
}

export default Navbar;