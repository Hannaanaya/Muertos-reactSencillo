import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
// import ImaFullPorta from '../images/inicio.jpg';
import logoIma from '../images/ini.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-5">
              <img
                src={logoIma}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>La tradición de México</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            {/* <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={logoIma}
                alt="Logo"
                className="img-fluid p-4"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}