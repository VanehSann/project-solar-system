import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { name, year, country, destination} = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-name">{ year }</p>
        <p data-testid="mission-name">{ country }</p>
        <p data-testid="mission-name">{ destination }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
