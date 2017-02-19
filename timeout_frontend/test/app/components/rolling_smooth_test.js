import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import RollingSmooth from '.app/components/rolling_smooth';

describe('<RollingSmooth />', () => {
  it('renders correctly given minimal props', () => {
    const wrapper = shallow(<RollingSmooth />);
    expect(wrapper.find('RollingSmoothContainerDefault').length).to.eql(1);
    expect(wrapper.find('RollingSmoothDefault').length).to.eql(10);
    // it starts at 0, given nothing
    expect(wrapper.find('RollingSmoothDefault').at(0).props()).to.eql({
      width: 1,
      delay: 0,
      numOfItems: 10,
      secondPerAnim: 10,
      children: '0'
    });
    // it gets a numeral key
    expect(wrapper.find('RollingSmoothDefault').at(0).key()).to.eql('0');
    // it ends at 9, given nothing, has a length - 1 * anim delay
    expect(wrapper.find('RollingSmoothDefault').at(9).props()).to.eql({
      width: 1,
      delay: -9,
      numOfItems: 10,
      secondPerAnim: 10,
      children: '9'
    });
    expect(wrapper.find('RollingSmoothDefault').at(9).key()).to.eql('9');
  });

  it('renders listens to min/max props', () => {
    const wrapper = shallow(<RollingSmooth min={3} max={6} />);
    expect(wrapper.find('RollingSmoothDefault').length).to.eql(4);
    expect(wrapper.find('RollingSmoothDefault').at(0).props().children).to.eql('3');
    expect(wrapper.find('RollingSmoothDefault').at(3).props().children).to.eql('6');
  });

  it('can do reverse motion', () => {
    const wrapper = shallow(<RollingSmooth min={3} max={6} reverse />);
    expect(wrapper.find('RollingSmoothDefault').length).to.eql(4);
    expect(wrapper.find('RollingSmoothDefault').at(0).props().children).to.eql('6');
    expect(wrapper.find('RollingSmoothDefault').at(1).props().children).to.eql('5');
    expect(wrapper.find('RollingSmoothDefault').at(2).props().children).to.eql('4');
    expect(wrapper.find('RollingSmoothDefault').at(3).props().children).to.eql('3');
  });

  it('correctly interprets delay and anim timing', () => {
    const wrapper = shallow(<RollingSmooth min={3} max={6} secondPerAnim={10} />);
    // anim 40s because it's length * animtime
    expect(wrapper.find('RollingSmoothDefault').at(0).props()).to.eql({
      children: '3',
      delay: 0,
      numOfItems: 4,
      secondPerAnim: 40,
      width: 1
    });
    // delay is -30 because it's 3 cycles away, and anim is 10s long
    expect(wrapper.find('RollingSmoothDefault').at(3).props()).to.eql({
      children: '6',
      delay: -30,
      numOfItems: 4,
      secondPerAnim: 40,
      width: 1
    });
  });

  it('begins rolling at the correct value', () => {
    const wrapper = shallow(<RollingSmooth min={3} value={4} delay={0.12} />);
    expect(wrapper.find('RollingSmoothDefault').at(0).props()).to.eql({
      children: '3',
      delay: -0.88,
      numOfItems: 7,
      secondPerAnim: 7,
      width: 1
    });
    expect(wrapper.find('RollingSmoothDefault').at(1).props()).to.eql({
      children: '4',
      delay: -1.88,
      numOfItems: 7,
      secondPerAnim: 7,
      width: 1
    });
  });
});
