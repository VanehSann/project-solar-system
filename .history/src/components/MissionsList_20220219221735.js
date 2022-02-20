import React from 'react';
// import propTypes from 'prop-types';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class MissionList extends React.Component {
  render() {
    return (
      <div>
        {
          missions.map((i) => (
            <MissionCard
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

export default MissionList;
