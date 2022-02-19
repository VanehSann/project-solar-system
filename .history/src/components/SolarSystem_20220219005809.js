import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

console.log(Planets)
class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
        <PlanetCard key={'Terra'} planetName={ 'Terra' } planetImage={'Terra'} />
      </div>);
  }
}

export default SolarSystem;
