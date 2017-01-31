import React, { Component } from 'react';
import RollingDigit from './rolling_digit';

class DigitRoller extends Component {

  constructor(props) {
    super(props);
    const {
      initDelay,
      startValue,
      min
    } = this.props;
    this.state = {
      initDelay,
      tick: startValue || min,
      resetAnimation: true
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    if (this.props.secondPer * 1000 > 2147483647) return;
    this.firstSet = this.state.initDelay || this.props.secondPer;
    this.timer = setInterval(this.tick, (this.state.initDelay || this.props.secondPer) * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    const {
      min,
      max
    } = this.props;
    const defaultMin = min || 0;
    const defaultMax = max || 9;

    const { tick } = this.state;
    this.setState({ tick, resetAnimation: false });
    const value = (tick + 1 > defaultMax) ? defaultMin : tick + 1;
    // start the animation juuuust before 1 second before when it's supposed to turn
    setTimeout(() => this.setState({ tick: value, resetAnimation: true }), 950);
  }

  props: {
    min: ?number;
    max: ?number;
    secondPer: number;
    startValue: ?number;
    initDelay: ?number;
  };

  render() {
    const {
      min,
      max,
      secondPer
    } = this.props;
    const defaultMin = min || 0;
    const defaultMax = max || 9;

    // this is a bit gross. But we need a way to reset the intial timer to the full interval
    // TODO: fix issue where the component is mounted soon before tick, so it
    // re-renders every second with a broken looping animation; never
    // resetting to the right state
    if (this.firstSet < this.props.secondPer) {
      this.firstSet = this.props.secondPer;
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, this.props.secondPer * 1000);
    }

    return (
      <RollingDigit
        min={defaultMin}
        max={defaultMax}
        value={this.state.tick}
        secondPerAnim={secondPer}
        resetAnimation={this.state.resetAnimation}
      />
    );
  }
}

export default DigitRoller;
