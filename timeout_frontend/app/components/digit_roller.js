import React, { Component } from 'react';
import RollingDigit from './rolling_digit';

class DigitRoller extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tick: this.props.startValue || props.min,
      resetAnimation: false
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, this.props.secondPer * 1000);
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
    this.setState({ tick: value, resetAnimation: true });
    setTimeout(this.setState({ tick: value, resetAnimation: false }), 2);
    const value = (tick + 1 > defaultMax) ? defaultMin : tick + 1;
  }

  props: {
    min: ?number;
    max: ?number;
    secondPer: number;
    startValue: ?number;
  };

  render() {
    const {
      min,
      max,
      secondPer
    } = this.props;
    const defaultMin = min || 0;
    const defaultMax = max || 9;

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
