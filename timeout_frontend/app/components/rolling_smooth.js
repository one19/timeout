import React from 'react';
import {
  RollingSmoothDefault,
  RollingSmoothContainerDefault
} from './rolling_smooth.css';

type Props = {
  min: ?number;
  max: ?number;
  value: ?number;
  delay: ?number;
  reverse: ?boolean;
  secondPerAnim: ?number;
};

export default function RollingSmooth(props: Props) {
  const {
    min = 0,
    delay = 0,
    value = min,
    secondPerAnim = 1,
    reverse,
    max
  } = props;
  let defaultDigits = '0123456789'.split('');
  defaultDigits = defaultDigits.filter(e => e >= min);
  if (max) defaultDigits = defaultDigits.filter(e => e <= max);
  if (reverse) defaultDigits = defaultDigits.reverse();
  const valIndex = defaultDigits.findIndex(e => parseInt(e, 10) === value);

  return (
    <RollingSmoothContainerDefault>
      {defaultDigits.map((digit, i) =>
        <RollingSmoothDefault
          key={i}
          width={digit.length}
          delay={delay - ((valIndex + i) * secondPerAnim)}
          numOfItems={defaultDigits.length}
          secondPerAnim={secondPerAnim * defaultDigits.length}
        >
          {digit}
        </RollingSmoothDefault>
      )}
    </RollingSmoothContainerDefault>
  );
}
