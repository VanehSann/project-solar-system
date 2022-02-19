import React from 'react';
import Title from './Title';
import propTypes from 'prop-types';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

// console.log(Planets)
class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((item) => { <PlanetCard key={item.name} planetImage={item.image} planetName={item.name} />
  console.log(item.name)
  }) }
      </div>);
  }
}

SolarSystem.propTypes = {
  Planets: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      image: propTypes.string,
    })
  ).isRequired
};

export default SolarSystem;
