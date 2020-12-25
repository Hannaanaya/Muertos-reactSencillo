import React from 'react';

import '../pages/styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import header from '../images/inicio.jpg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                first="¿Qué es el"
                second=" Día de Muertos?"
                info1="La tradición del Día de Muertos surge como parte del sincretismo religioso, en la época colonial."
                info2="Durante la etapa prehispánica, el culto a la muerte estuvo presente en distintas culturas a lo largo y ancho de México."
                date="1 y 2 de Noviembre"
              />
            </div>

            <div className="col-6">
              <BadgeForm
              title="Que lleva una ofrenda"
              parra1="Entre los elementos necesarios están veladoras, inciensos, sal, calaveras de
              dulce, pan de muerto, papel picado y flores de cempasúchil"
              parra2="Además, se colocan objetos personales, comida que disfrutaba en vida, algún
              licor o cigarros y fotografías, o incluso algún juguete o dulce si se trata de un niño."
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;