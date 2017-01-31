import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import YearTimer from '.app/components/year_timer';

describe('<YearTimer />', () => {
  it('renders startvals correctly given minimal props', () => {
    const wrapper = mount(<YearTimer date={new Date('Tue Jan 31 2017 23:59:56 GMT+1100 (AEDT)')} />);
    expect(wrapper.find('TimerWrapperDefault').length).to.eql(1);
    expect(wrapper.find('DigitRoller').length).to.eql(14);
    expect(wrapper.find('DigitRoller').at(0).props().startValue).to.eql(2);
    expect(wrapper.find('DigitRoller').at(1).props().startValue).to.eql(0);
    expect(wrapper.find('DigitRoller').at(2).props().startValue).to.eql(1);
    expect(wrapper.find('DigitRoller').at(3).props().startValue).to.eql(7);
    expect(wrapper.find('DigitRoller').at(4).props().startValue).to.eql(0);
    expect(wrapper.find('DigitRoller').at(5).props().startValue).to.eql(1);
    expect(wrapper.find('DigitRoller').at(6).props().startValue).to.eql(3);
    expect(wrapper.find('DigitRoller').at(7).props().startValue).to.eql(1);
    expect(wrapper.find('DigitRoller').at(8).props().startValue).to.be.within(1, 2);
    expect(wrapper.find('DigitRoller').at(9).props().startValue).to.be.within(2, 3);
    expect(wrapper.find('DigitRoller').at(10).props().startValue).to.eql(5);
    expect(wrapper.find('DigitRoller').at(11).props().startValue).to.eql(9);
    expect(wrapper.find('DigitRoller').at(12).props().startValue).to.eql(5);
    expect(wrapper.find('DigitRoller').at(13).props().startValue).to.eql(6);
  });

  it('renders secondPers correctly given minimal props', () => {
    const wrapper = mount(<YearTimer date={new Date('Tue Jan 31 2017 23:59:56 GMT+1100 (AEDT)')} />);
    expect(wrapper.find('TimerWrapperDefault').length).to.eql(1);
    expect(wrapper.find('DigitRoller').length).to.eql(14);
    expect(wrapper.find('DigitRoller').at(0).props().secondPer).to.eql(1000 * 365.25 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(1).props().secondPer).to.eql(100 * 365.25 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(2).props().secondPer).to.eql(10 * 365.25 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(3).props().secondPer).to.eql(365.25 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(4).props().secondPer).to.eql(273 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(5).props().secondPer).to.eql(31 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(6).props().secondPer).to.eql(10 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(7).props().secondPer).to.eql(24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(8).props().secondPer).to.eql(10 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(9).props().secondPer).to.eql(60 * 60);
    expect(wrapper.find('DigitRoller').at(10).props().secondPer).to.eql(10 * 60);
    expect(wrapper.find('DigitRoller').at(11).props().secondPer).to.eql(60);
    expect(wrapper.find('DigitRoller').at(12).props().secondPer).to.eql(10);
    expect(wrapper.find('DigitRoller').at(13).props().secondPer).to.eql(1);
  });

  it('gives specific min/max props to child components', () => {
    const wrapper = mount(<YearTimer date={new Date('Tue Jan 31 2017 23:59:56 GMT+1100 (AEDT)')} />);
    expect(wrapper.find('TimerWrapperDefault').length).to.eql(1);
    expect(wrapper.find('DigitRoller').length).to.eql(14);
    // ten month numeral can be no larger than 1
    expect(wrapper.find('DigitRoller').at(4).props().max).to.eql(1);
    // ten day numeral can be no larger than the largest possible that month
    expect(wrapper.find('DigitRoller').at(6).props().max).to.eql(3);
    // ten hour numeral can be no larger than 2
    expect(wrapper.find('DigitRoller').at(8).props().max).to.eql(2);
    // ten minute numeral can go no larger than 5
    expect(wrapper.find('DigitRoller').at(10).props().max).to.eql(5);
    // ten second numeral can go no larger than 5
    expect(wrapper.find('DigitRoller').at(12).props().startValue).to.eql(5);
  });

  it('gives the  correct month days for feb in a leap year', () => {
    const wrapper = mount(<YearTimer date={new Date('Feb 20 2020 23:59:56 GMT+1100 (AEDT)')} />);
    expect(wrapper.find('DigitRoller').at(5).props().secondPer).to.eql(29 * 24 * 60 * 60);
    expect(wrapper.find('DigitRoller').at(4).props().secondPer).to.eql(274 * 24 * 60 * 60);
  });
});
