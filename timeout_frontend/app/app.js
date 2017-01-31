import React, { Component } from 'react';
import AppDefault from './app.css';
// import RollingDigit from './components/rolling_digit';
// import DigitRoller from './components/digit_roller';
import YearTimer from './components/year_timer';

class App extends Component {
  render() {
    return (
      <AppDefault>
        <YearTimer date={new Date()} />
      </AppDefault>
    );
  }
}

export default App;
