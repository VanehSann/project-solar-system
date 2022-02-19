import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planets = '../data/planets';
    const { planets } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((card) => <PlanetCard key={card.name} /> 
        )}
      </div>);
  }
}

export default SolarSystem;
