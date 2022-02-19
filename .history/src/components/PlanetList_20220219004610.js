import { Component } from 'react';
import propTypes from 'prop-types';
import PlanetCard from './PlanetCard';

class PlanetList extends Component {
  render() {
    const { name: { planetName, planetImage } } = this.props;
    return (
      <div>
        <p data-testid="planet-card">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
