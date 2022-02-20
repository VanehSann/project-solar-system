import React from 'react';
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
              name={ i.name }
              year={ i.year }
              country={ i.country }
              destination={ i.destination }       
            />
          ))
        }
      </div>
    );
  }
}

export default MissionList;
