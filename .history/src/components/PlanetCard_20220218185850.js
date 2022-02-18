import React from 'react';

class PlanetCard extends React.Component {
  ranger() {
    const { planetName, planetImage } = this.props;
    const stringPlanet = `Planeta ${planetImage}`
    return (
      <div>
      <p data-testid="planet-card"></p>
      <img src={planetImage} alt={stringPlanet} />
      </div>
    );
  }
}