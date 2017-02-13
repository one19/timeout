import React, { Component } from 'react';
import AppDefault from './app.css';
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
