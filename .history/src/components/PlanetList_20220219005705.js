import { Component } from 'react';
import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';

class PlanetList extends Component {
  render() {
    import Planets from '../data/planets';
    const { Planets } = this.props;
    return (
      <div>
      { Planets.map((item) => { <PlanetCard key={item.name} planetImage={item.image} planetName={item.name} />
  }) }
      </div>
    );
  }
}

PlanetList.propTypes = {
  Planets: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      image: propTypes.string,
    })
  ).isRequired
};

export default PlanetList;
