import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import RollingDigit from '.app/components/rolling_digit';

describe('<RollingDigit />', () => {
  it('renders correctly given minimal props', () => {
    const wrapper = shallow(<RollingDigit />);
    expect(wrapper.find('RollingDigitContainerDefault').length).to.eql(1);
    expect(wrapper.find('RollingDigitDefault').length).to.eql(1);
    // it starts at 0, given nothing
    expect(wrapper.find('RollingDigitDefault').props().children).to.eql(0);
    // it has an ::after element containing the next digit
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(1);
    expect(wrapper.find('RollingDigitDefault').props().secondPerAnim).to.eql(1);
  });

  it('doesn\'t roll below the minimum given prop', () => {
    const wrapper = shallow(<RollingDigit min={2} />);
    expect(wrapper.find('RollingDigitDefault').props().children).to.eql(2);
  });

  it('nextValue is 1 greater than current value', () => {
    const wrapper = shallow(<RollingDigit value={3} />);
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(4);
  });

  it('rolls over the nextValue (to 0 default) when at max', () => {
    const wrapper = shallow(<RollingDigit max={3} value={3} />);
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(0);
  });

  it('rolls over the nextValue to min when at max', () => {
    const wrapper = shallow(<RollingDigit min={1} max={3} value={3} />);
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(1);
  });

  it('renders animationless when given Infinity prop', () => {
    const wrapper = shallow(<RollingDigit secondPerAnim={Infinity} />);
    const also = shallow(<RollingDigit delay={Infinity} />);
    expect(wrapper.find('RollingDigitDefault').props().secondPerAnim).to.eql(Infinity);
    // duh, given an infinite delay, the animation should take forever
    expect(also.find('RollingDigitDefault').props().secondPerAnim).to.eql(Infinity);
  });

  it('will roll in reverse if given the prop', () => {
    const wrapper = shallow(<RollingDigit min={1} max={3} value={3} reverse />);
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(2);
  });

  it('won\'t roll nextValue below min in reverse', () => {
    const wrapper = shallow(<RollingDigit min={1} max={3} value={1} reverse />);
    expect(wrapper.find('RollingDigitDefault').props().nextValue).to.eql(3);
  });
});
