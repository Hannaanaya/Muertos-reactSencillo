import React from 'react';

import './styles/Badge.css';
import logoPag from '../images/inicio.jpg';
import imaOfre from '../images/ofrenda.jpg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge" >

          <div className="Badge__header" >
           <img src={logoPag} alt="Logo de la pagina"/>
          </div>  
          
          <div className="Badge__section-prese" >
              <img className="Badge__ofre" src={imaOfre} alt="Ofrenda"/>
              <h2>{this.props.first} <br/>{this.props.second} </h2>
          </div>

          <div className="Badge__section-info" >
              <h5>
               {this.props.info1} <br/> {this.props.info2}
              </h5>
          </div>

          <div className="Badge__footer">
              <p>{this.props.date}</p>
          </div>

      </div>
    );
  }
}

export default Badge;