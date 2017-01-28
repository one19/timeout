import React, { Component } from 'react';
import {
  RollingDigitDefault,
  RollingDigitContainerDefault
} from './rolling_digit.css';

class RollingDigit extends Component {
  props: {
    min: ?number;
    max: ?number;
    value: ?number;
    animPerSecond: ?number;
  };

  render() {
    const {
      min,
      max,
      value,
      animPerSecond
    } = this.props;

    const safeValue = value || min || 0;
    const nextValue = (safeValue + 1 > max) ? min || 0 : safeValue + 1;
    return (
      <RollingDigitContainerDefault>
        <RollingDigitDefault
          nextValue={nextValue}
          animPerSecond={animPerSecond || 1}
        >
          {safeValue}
        </RollingDigitDefault>
      </RollingDigitContainerDefault>
    );
  }
}

export default RollingDigit;
