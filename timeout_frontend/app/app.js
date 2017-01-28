import React, { Component } from 'react';
import AppDefault from './app.css';
import RollingDigit from './components/rolling_digit';
import DigitRoller from './components/digit_roller';

class App extends Component {
  render() {
    return (
      <AppDefault>
        <RollingDigit animPerSecond={1} />
        <br />
        <br />
        <br />
        <br />
        <DigitRoller
          min={0}
          max={9}
          secondPer={1}
          startValue={5}
        />
      </AppDefault>
    );
  }
}

export default App;
