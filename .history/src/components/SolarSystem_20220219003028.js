import React from 'react';
import Title from './Title';
const Planets = require('../data/planets');
import PlanetCard from './PlanetCard';

console.log(Planets)
class SolarSystem extends React.Component {
  render() {
    // const PlanetsC = Planets;
    const Planets = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {/* Planets.map((card) => <PlanetCard key={card.name} planetName={ card.name } planetImage={card.image} /> 
        ); */}
      </div>);
  }
}

export default SolarSystem;
