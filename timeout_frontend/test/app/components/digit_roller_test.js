import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import DigitRoller from '.app/components/digit_roller';

describe('<DigitRoller />', () => {
  let clock;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    clock.restore();
  });

  it('renders correctly given minimal props', () => {
    const wrapper = mount(<DigitRoller secondPer={4} />);
    // rollingDigitDefaultContainer et all
    expect(wrapper.children().props()).to.eql({
      alt: undefined,
      children: 0,
      delay: Infinity,
      nextValue: 1,
      secondPerAnim: Infinity
    });
    // starts a timer as well
    expect(wrapper.find('DigitRoller').root.node.timer).to.be.instanceOf(Object);
    // has a recursively called function that updates the value
    expect(wrapper.find('DigitRoller').root.node.tick).to.be.instanceOf(Function);
  });

  it('doesn\'t start a dumb timer if given really long anim', () => {
    const wrapper = mount(<DigitRoller secondPer={Infinity} />);
    expect(wrapper.find('DigitRoller').root.node.timer).to.eql(undefined);
  });

  it('defaults to a max of 9, min of 0', () => {
    const wrapper = mount(<DigitRoller secondPer={1} initDelay={0} startValue={8} />);
    clock.tick(1000);
    expect(wrapper.state()).to.eql({ tick: 9, alt: true });
    clock.tick(1000);
    expect(wrapper.state()).to.eql({ tick: 0, alt: false });
  });

  it('can be given a start value', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} startValue={5} />);
    expect(wrapper.state()).to.eql({ tick: 5 });
  });

  it('passes along a delay 1 second less than the interval', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} initDelay={1} />);
    expect(wrapper.children().props().delay).to.eql(0);
    clock.tick(1000);
    expect(wrapper.children().props().delay).to.eql(3);
  });

  it('changes interval to the steady one after 1 delay', () => {
    const wrapper = mount(<DigitRoller secondPer={10} initDelay={2} />);
    expect(wrapper.state()).to.eql({ tick: 0 });
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 1, alt: true });
    clock.tick(9999);
    expect(wrapper.state()).to.eql({ tick: 1, alt: true });
    clock.tick(1);
    expect(wrapper.state()).to.eql({ tick: 2, alt: false });
    clock.tick(10000);
    expect(wrapper.state()).to.eql({ tick: 3, alt: true });
  });

  it('alternates alt prop on secondPer, and counts up & over properly', () => {
    const wrapper = mount(<DigitRoller min={3} max={5} secondPer={2} initDelay={0} />);
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 4, alt: true });
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 5, alt: false });
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 3, alt: true });
  });

  it('counts in reverse properly, given the prop', () => {
    const wrapper = mount(<DigitRoller min={3} max={5} secondPer={2} initDelay={0} reverse />);
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 5, alt: true });
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 4, alt: false });
    clock.tick(2000);
    expect(wrapper.state()).to.eql({ tick: 3, alt: true });
  });

  it('listens to state updates, and renders correctly', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} />);
    wrapper.setState({ tick: 5, alt: false });
    expect(wrapper.children().at(0).length).to.eql(1);
    expect(wrapper.children().at(0).props().children).to.eql(5);
    expect(wrapper.children().at(0).props().nextValue).to.eql(6);
  });

  it('passes the reverse prop to children properly', () => {
    const wrapper = mount(<DigitRoller min={3} max={6} secondPer={4} reverse />);
    expect(wrapper.children().at(0).props().children).to.eql(3);
    expect(wrapper.children().at(0).props().nextValue).to.eql(6);
  });

  it('can roll smoothly instead', () => {
    const wrapper = mount(<DigitRoller min={3} secondPer={4} initDelay={0.3} smooth />);
    expect(wrapper.find('RollingSmoothDefault').length).to.eql(7);
    expect(wrapper.find('RollingSmoothDefault').at(0).props()).to.eql({
      children: '3',
      delay: 0.3,
      numOfItems: 7,
      secondPerAnim: 28,
      width: 1
    });
    expect(wrapper.find('RollingSmoothDefault').at(1).props()).to.eql({
      children: '4',
      delay: -3.7,
      numOfItems: 7,
      secondPerAnim: 28,
      width: 1
    });
  });

  it('can doesn\'t need any timers when smooth', () => {
    const wrapper = mount(<DigitRoller smooth />);
    expect(wrapper.find('DigitRoller').root.node.timer).to.eql(undefined);
  });
});
