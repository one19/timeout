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

        // <RollingDigit animPerSecond={1} />
        // <br />
        // <br />
        // <br />
        // <br />
        // <DigitRoller
        //   min={0}
        //   max={9}
        //   secondPer={1}
        //   startValue={5}
        // />
        // <br />
        // <br />
        // <br />
        // <br />
