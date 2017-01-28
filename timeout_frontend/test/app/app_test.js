import { expect } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';

import App from '.app/app';
import AppDefault from '.app/app.css';

describe('<App />', () => {
  it('renders a test component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('AppDefault').length).to.eql(1);
  });

  it('renders background with the correct className and style', () => {
    const primitive = render(<AppDefault />);
    const wrapper = render(<App />);

    expect(wrapper.children()[0].attribs.class).to.eql(primitive.children()[0].attribs.class);
  });
});
