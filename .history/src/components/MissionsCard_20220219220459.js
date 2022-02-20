import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { name, year, country, destination} = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
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
