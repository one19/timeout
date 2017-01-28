import styled, { keyframes } from 'styled-components';
// TODO make a small setup, and a large. Do it SMART

// TODO: make a prettier bezier up in this ho
const rollUp = keyframes`
  from {
    top: 0;
  }

  to {
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
const defaultContainer = Object.assign({}, defaultStyle, { 'overflow-y': 'hidden' });

// animPerSecond times the animation speed to 19% faster than the timer rate
// nextValue renders the ::after content with the number next in the cycle
export const RollingDigitDefault = styled.div`${defaultStyle}
  animation: ${rollUp} ${props => props.animPerSecond * 840}ms ease-in-out infinite;
  &::after {
    content: '${props => props.nextValue}';
    display: block;
  }`;
export const RollingDigitContainerDefault = styled.div`${defaultContainer}`;
