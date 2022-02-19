import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

console.log(planets)
class SolarSystem extends React.Component {

console.log(planets)
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        planets.map((card) => <PlanetCard key={card.name} /> 
        )
      </div>);
  }
}

export default SolarSystem;
