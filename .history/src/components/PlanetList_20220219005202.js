import { Component } from 'react';
import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class PlanetList extends Component {
  render() {
    const { nomes } = this.props;
    return (
      <div>
       Planets.map()
      </div>
    );
  }
}

PlanetList.propTypes = {
  nomes: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      image: propTypes.string,
    })
  ).isRequired
};

export default PlanetCard;
