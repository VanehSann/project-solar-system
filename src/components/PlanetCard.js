import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, width, height } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          width={ width }
          height={ height }
        />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
};

export default PlanetCard;
