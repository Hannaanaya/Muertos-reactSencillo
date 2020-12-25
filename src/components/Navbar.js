import React from 'react';

import './styles/Navbar.css';
import logo from '../images/inicio.jpg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    < img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    <span className="font-weight-bold">Conoce y celebra </span>
                    <span className="font-weight-light"> con nosotros</span>
                </a>
                </div>
            </div>
        )
    }
}

export default Navbar;