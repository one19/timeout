import { expect } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';

import App from '.app/app';
import stylesClass from '.app/app.css';

describe('<App />', () => {
  it('renders a test component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.contain.text('Test');
  });

  it('renders with the correct styles', () => {
    const wrapper = render(<App />);
    expect(wrapper.html()).to.include(stylesClass.back);
  });
});
