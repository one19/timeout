import React, { Component } from 'react';
import AppDefault from './app.css';
import YearTimer from './components/year_timer';
import RollingSmooth from './components/rolling_smooth';

class App extends Component {
  render() {
    return (
      <AppDefault>
        <YearTimer date={new Date()} />
        <br /><br /><br /><br />
        <RollingSmooth value={3} min={2} max={7} secondPerAnim={3} reverse />
      </AppDefault>
    );
  }
}

export default App;
