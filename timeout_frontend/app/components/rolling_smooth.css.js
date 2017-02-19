import React from 'react';
import { keyframes } from 'styled-components';
import { defaultContainer, defaultStyle } from './rolling_digit.css';

const styled = require('styled-components');
// TODO: SWITCH BACK TO THIS SHIT WHEN WEBPACK FIXES ITSELF
// import styled, { keyframes } from 'styled-components';

const smoothRollUp = numOfItems => keyframes`
  0% {
    top: 40px;
  }
  100% {
    top: -${40 * numOfItems}px;
  }
`;


const RollingSmoothDefaults = styled.default.div`${props => Object.assign(
    defaultStyle,
    { width: `${24 * props.width}px`, top: '40px' }
  )}
  -webkit-animation: ${props => smoothRollUp(props.numOfItems)}
    ${props => props.secondPerAnim * 1100}ms linear infinite;
  animation: ${props => smoothRollUp(props.numOfItems)}
    ${props => props.secondPerAnim * 1000}ms linear infinite;
  -webkit-animation-delay: ${props => props.delay}s;
  animation-delay: ${props => props.delay}s;
`;
const RollingSmoothContainerDefaults = styled.default.div`${props => Object.assign(defaultContainer,
  { width: `${24 * props.width}px` }
)}`;

// TODO switch this back when webpack sucks less
export const RollingSmoothDefault = props => <RollingSmoothDefaults name="RollingSmoothDefault" {...props} />;
export const RollingSmoothContainerDefault = props => <RollingSmoothContainerDefaults name="RollingSmoothContainerDefault" {...props} />;
