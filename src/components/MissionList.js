import React from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class MissionList extends React.Component {
  render() {
    return (
      <div className="cards-container">
        {
          missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default MissionList;
