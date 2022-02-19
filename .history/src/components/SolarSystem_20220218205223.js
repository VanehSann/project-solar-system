import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { planetCards } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetCards.map((card) => <PlanetCard key={card.name} /> 
        )}
      </div>);
  }
}

export default SolarSystem;
