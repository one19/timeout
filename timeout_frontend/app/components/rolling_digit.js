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
  delay: ?number;
  alt: ?boolean;
  reverse: ?boolean;
};

export default function RollingDigit(props: Props) {
  const {
    min,
    max,
    alt,
    value,
    reverse,
    secondPerAnim,
    delay
  } = props;

  const safeValue = value || min || 0;
  let nextValue = (safeValue + 1 > max) ? min || 0 : safeValue + 1;
  if (reverse) nextValue = (safeValue - 1 < min) ? max : safeValue - 1;
  const safeSpeed = (delay === Infinity) ? Infinity : secondPerAnim || 1;
  return (
    <RollingDigitContainerDefault>
      <RollingDigitDefault
        delay={delay}
        nextValue={nextValue}
        secondPerAnim={safeSpeed}
        alt={alt}
      >
        {safeValue}
      </RollingDigitDefault>
    </RollingDigitContainerDefault>
  );
}
