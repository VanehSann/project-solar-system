import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import MissionList from './components/MissionList';
// dando commit
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <MissionList />
      </div>);
  }
}

export default App;
