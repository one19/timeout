import React, { Component } from 'react';
import {
  RollingDigitDefault,
  RollingDigitDefaultStill,
  RollingDigitContainerDefault
} from './rolling_digit.css';

class RollingDigit extends Component {
  props: {
    min: ?number;
    max: ?number;
    value: ?number;
    secondPerAnim: ?number;
    resetAnimation: ?boolean;
  };

  render() {
    const {
      min,
      max,
      value,
      secondPerAnim,
      resetAnimation
    } = this.props;

    const safeValue = value || min || 0;
    const nextValue = (safeValue + 1 > max) ? min || 0 : safeValue + 1;
    return ((resetAnimation) ?
      <RollingDigitContainerDefault>
        <RollingDigitDefaultStill
          resetAnimation={resetAnimation}
          nextValue={nextValue}
          secondPerAnim={secondPerAnim || 1}
        >
          {safeValue}
        </RollingDigitDefaultStill>
      </RollingDigitContainerDefault> :
      <RollingDigitContainerDefault>
        <RollingDigitDefault
          resetAnimation={resetAnimation}
          nextValue={nextValue}
          secondPerAnim={secondPerAnim || 1}
        >
          {safeValue}
        </RollingDigitDefault>
      </RollingDigitContainerDefault>
    );
  }
}

export default RollingDigit;
