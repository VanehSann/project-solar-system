import React from 'react';
import propTypes from 'prop-types'

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    // const stringPlanet = `Planeta ${planetName}`
    return (
      <div>
      <p data-testid="planet-card">{ planetName }</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
