import { keyframes } from 'styled-components';
import React from 'react';

const styled = require('styled-components');
// TODO: SWITCH BACK TO THIS SHIT WHEN WEBPACK FIXES ITSELF
// import styled, { keyframes } from 'styled-components';

// TODO make a small setup, and a large. Do it SMART

// TODO: make a prettier bezier up in this ho
const rollUp = keyframes`
  0% {
    top: 0;
  }
  16% {
    top: 0;
  }
  84% {
    top: -40px;
  }
  100% {
    top: -40px;
  }
`;

// create a basic set of style properties for our timer
const defaultStyle = {
  width: '24px',
  height: '40px',
  padding: '2px 4px',
  display: 'inline-block',
  position: 'absolute',
  'font-size': '40px',
  'font-family': '"Open Sans", sans-serif;',
  'font-weight': 600,
  'vertical-align': 'middle'
};

// create a basic set of styles for the container for our rolling digit
const defaultContainer = {
  overflow: 'hidden',
  width: '28px',
  height: '40px',
  display: 'block',
  position: 'relative'
};

// generating animation of block that moves up one digit/s*animProp, forever
const RollingDigitDefaults = styled.default.div`${defaultStyle}
  -webkit-animation: ${rollUp} ${props => props.secondPerAnim * 1000}ms ease-in-out infinite;
  animation: ${rollUp} ${props => props.secondPerAnim * 1000}ms ease-in-out infinite;
  -webkit-animation-delay: ${props => props.delay}s;
  animation-delay: ${props => props.delay}s;
  &::after {
    content: '${props => props.nextValue}';
    display: block;
  }`;
const RollingDigitContainerDefaults = styled.default.div`${defaultContainer}`;


// holy shitoly this is getting absurd for fixing the namespacing that
// the webpack-styled-components mismatch created.
export const RollingDigitDefault = props => <RollingDigitDefaults name="RollingDigitDefault" {...props} />;
export const RollingDigitContainerDefault = props => <RollingDigitContainerDefaults name="RollingDigitContainerDefault" {...props} />;

