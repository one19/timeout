import styled, { keyframes } from 'styled-components';
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

// anim/s is slower than 1s because it gets re-rendered on the second, and we're
// resetting the animation anyway with a second re-render with no animation
// nextValue renders the ::after content with the number next in the cycle
export const RollingDigitDefault = styled.div`${defaultStyle}
  animation: ${rollUp} ${props => ((props.secondPerAnim < 1) ? props.secondPerAnim * 1005 : 1005)}ms ease-in-out infinite;
  &::after {
    content: '${props => props.nextValue}';
    display: block;
  }`;
export const RollingDigitDefaultStill = styled.div`${defaultStyle}`;
export const RollingDigitContainerDefault = styled.div`${defaultContainer}`;
