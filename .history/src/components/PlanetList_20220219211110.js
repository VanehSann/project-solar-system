import React from 'react';
// import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class PlanetList extends react.Component {
  render() {
    return (
      <div>
        {
          Planets.map((i) => (
            <PlanetCard
              key={ i.name }
              planetName={ i.name }
              planetImage={ i.image }
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
