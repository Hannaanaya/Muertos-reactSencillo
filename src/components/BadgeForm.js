import React from 'react';

import './styles/BadgeForm.css';

class BadgeForm extends React.Component {
    render() {
        return (
            <div> 

              <div className="Badge__section-prese" >
                  <h2>{this.props.title} </h2>
              </div>
              <div className="Badge__section-info" >
              <h5>
              <p>{this.props.parra1}</p>
              <p>{this.props.parra2}</p>
              </h5>
          </div>
          <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-primary">
              Para saber más
          </button>
            </div>
        );
    }
}

export default BadgeForm;