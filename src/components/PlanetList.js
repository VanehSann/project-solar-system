import React from 'react';
// import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class PlanetList extends React.Component {
  render() {
    return (
      <div className="cards-container">
        {
          Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              width={ planet.width }
              height={ planet.height }
            />
          ))
        }
      </div>
    );
  }
}

// PlanetList.propTypes = {
//   Planets: propTypes.arrayOf(
//     propTypes.shape({
//       name: propTypes.string,
//       image: propTypes.string,
//     })
//   ).isRequired
// };

export default PlanetList;
