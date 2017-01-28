import React, { Component } from 'react';
import AppDefault from './app.css';
import RollingDigit from './components/rolling_digit';

class App extends Component {
  render() {
    return (
      <AppDefault>
        <RollingDigit animPerSecond={1} />
      </AppDefault>
    );
  }
}

export default App;
