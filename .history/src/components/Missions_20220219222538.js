import React from 'react';
import Title from './Title';
import MissionList from './MissionList';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionList />
      </div>);
  }
}

export default Missions;
