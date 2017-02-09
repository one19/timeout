const styled = require('styled-components');
// TODO: SWITCH BACK TO THIS SHIT WHEN WEBPACK FIXES ITSELF
// import styled from 'styled-components';

// create a Back component
const style = {
  'background-color': 'palegoldenrod',
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '100%'
};

const AppDefault = styled.default.div`${style}`;

export default AppDefault;
