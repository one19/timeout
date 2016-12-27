import React, { Component } from 'react';
import CSSModules from './lib/cssModules';
import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div styleName="back">
        Test
      </div>
    );
  }
}

export default CSSModules(App, styles);
