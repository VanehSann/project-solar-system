import React from 'react';

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

export default PlanetCard;