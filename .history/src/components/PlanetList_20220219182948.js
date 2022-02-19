import { Component } from 'react';
import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class PlanetList extends Component {
  render() {
    return (
      console.log(<div>
        { Planets.map((item) => <PlanetCard key={item} planetImage={item.image} planetName={item.name} />
  ) }
      </div>)
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
