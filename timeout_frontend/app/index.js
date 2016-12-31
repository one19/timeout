import React from 'react';
import { render } from 'react-dom';
import App from './app';
import styles from './styles/reset.css'; // eslint-disable-line

const app = render(<App />, document.getElementById('app'));

export default app;
