import React, { Component } from 'react';
import RollingDigit from './rolling_digit';

export default class DigitRoller extends Component {
  constructor(props) {
    super(props);
    const { startValue, min = 0 } = this.props;
    this.state = { tick: startValue || min };

    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    if (this.props.secondPer * 1000 > 2147483647) return;
    const { initDelay, secondPer } = this.props;
    this.timer = setInterval(this.tick, (initDelay || secondPer) * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    const { min = 0, max = 9 } = this.props;
    const { tick, alt } = this.state;

    const value = (tick + 1 > max) ? min : tick + 1;
    this.setState({ tick: value, alt: !alt });
  }

  props: {
    min: ?number;
    max: ?number;
    secondPer: number;
    startValue: ?number;
    initDelay: ?number;
  };

  render() {
    const { initDelay, secondPer } = this.props;
    const safeSecondPer = (secondPer * 1000 > 2147483647) ? Infinity : secondPer;
    const safeInitDelay = initDelay || Infinity;

    // after the first tick(), set the timer roll to the steady interval
    if (!this.afterFirst && this.state.alt && this.timer) {
      this.afterFirst = true;
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, this.props.secondPer * 1000);
    }

    return (
      <RollingDigit
        min={this.props.min || 0}
        max={this.props.max || 9}
        alt={this.state.alt}
        value={this.state.tick}
        delay={this.afterFirst ? safeSecondPer - 1 : safeInitDelay - 1}
      />
    );
  }
}
