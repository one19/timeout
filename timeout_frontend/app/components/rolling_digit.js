import React from 'react';
import {
  RollingDigitDefault,
  RollingDigitContainerDefault
} from './rolling_digit.css';

type Props = {
  min: ?number;
  max: ?number;
  alt: ?boolean;
  value: ?number;
  delay: ?number;
  reverse: ?boolean;
  secondPerAnim: ?number;
};

export default function RollingDigit(props: Props) {
  const {
    max = 9,
    min = 0,
    delay = 0,
    value = min,
    secondPerAnim = 1,
    reverse,
    alt
  } = props;

  let nextValue = (value + 1 > max) ? min : value + 1;
  if (reverse) nextValue = (value - 1 < min) ? max : value - 1;
  const safeSpeed = (delay === Infinity) ? Infinity : secondPerAnim;
  return (
    <RollingDigitContainerDefault>
      <RollingDigitDefault
        delay={delay}
        nextValue={nextValue}
        secondPerAnim={safeSpeed}
        alt={alt}
      >
        {value}
      </RollingDigitDefault>
    </RollingDigitContainerDefault>
  );
}
