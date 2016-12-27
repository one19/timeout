import React from 'react';
import { render } from 'react-dom';
import App from './app';
import CSSModules from './lib/cssModules';
import styles from './styles/reset.css';

const app = render(<App />, document.getElementById('app'));

export default CSSModules(app, styles);
