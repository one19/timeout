import React from 'react';
import {
  RollingDigitDefault,
  RollingDigitContainerDefault
} from './rolling_digit.css';

type Props = {
  min: ?number;
  max: ?number;
  value: ?number;
  secondPerAnim: ?number;
  delay: ?boolean;
};

export default function RollingDigit(props: Props) {
  const {
    min,
    max,
    value,
    secondPerAnim,
    delay
  } = props;

  const safeValue = value || min || 0;
  const nextValue = (safeValue + 1 > max) ? min || 0 : safeValue + 1;
  return (
    <RollingDigitContainerDefault>
      <RollingDigitDefault
        delay={delay}
        nextValue={nextValue}
        secondPerAnim={secondPerAnim || 1}
      >
        {safeValue}
      </RollingDigitDefault>
    </RollingDigitContainerDefault>
  );
}
