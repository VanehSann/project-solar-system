import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
class SolarSystem extends React.Component {
  render() {
    console.log(planets[0])
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />  
      </div>
    );
  }
}

export default SolarSystem;
