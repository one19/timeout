import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import DigitRoller from '.app/components/digit_roller';

describe('<DigitRoller />', () => {
  it('renders correctly given minimal props', () => {
    const wrapper = mount(<DigitRoller secondPer={4} />);
    // rollingDigitDefaultContainer et all
    expect(wrapper.children().props()).to.eql({
      resetAnimation: true,
      nextValue: 1,
      secondPerAnim: 4,
      children: 0
    });
    // starts a timer as well
    expect(wrapper.find('DigitRoller').root.node.timer).to.be.instanceOf(Object);
    // has a recursively called function that updates the value
    expect(wrapper.find('DigitRoller').root.node.tick).to.be.instanceOf(Function);
  });

  it('can be given a start value', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} startValue={5} />);
    expect(wrapper.state()).to.eql({ tick: 5, resetAnimation: true, initDelay: undefined });
  });

  it('renders with the correct initial state', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} />);
    expect(wrapper.state()).to.eql({ tick: 3, resetAnimation: true, initDelay: undefined });
  });

  it('listens to state updates, and renders correctly', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} />);
    wrapper.setState({ tick: 5, resetAnimation: true });
    expect(wrapper.find('RollingDigitDefaultStill').length).to.eql(1);
    expect(wrapper.find('RollingDigitDefaultStill').props().nextValue).to.eql(6);
  });
});
