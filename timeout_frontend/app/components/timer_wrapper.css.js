const styled = require('styled-components');
// TODO: SWITCH BACK TO THIS SHIT WHEN WEBPACK FIXES ITSELF
// import styled from 'styled-components';

// create a basic set of style properties for our 'clock'
const defaultStyle = {
  height: '40px',
  display: 'inline-flex',
  position: 'absolute',
  'font-size': '40px',
  'font-family': '"Open Sans", sans-serif;',
  'font-weight': 600,
  'vertical-align': 'middle'
};

export const TimerWrapperDefault = styled.default.div`${defaultStyle}`;
