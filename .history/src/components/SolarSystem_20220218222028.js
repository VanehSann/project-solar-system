import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { planets } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        console.log({ planets.map((card) => <PlanetCard key={card.name} planetName={ card.name } planetImage={card.image} /> 
        )})
      </div>);
  }
}

export default SolarSystem;
