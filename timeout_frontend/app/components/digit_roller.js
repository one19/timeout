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
    const { tick } = this.state;
    const value = (tick + 1 > max) ? min : tick + 1;
    this.setState({ tick: value, resetAnimation: true });
    setTimeout(this.setState({ tick: value, resetAnimation: false }), 2);
  }

  props: {
    min: number;
    max: number;
    secondPer: number;
    startValue: ?number;
  };

  render() {
    const {
      min,
      max,
      secondPer
    } = this.props;

    return (
      <RollingDigit
        min={min}
        max={max}
        value={this.state.tick}
        secondPerAnim={secondPer}
        resetAnimation={this.state.resetAnimation}
      />
    );
  }
}

export default DigitRoller;
