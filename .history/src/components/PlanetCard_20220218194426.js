import React from 'react';
import propTypes from 'prop-types';
import data from 'src/data/planets.js';
class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props.map((item) => {

    });
    return (
      <div>
        <p data-testid="planet-card">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
