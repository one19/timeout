import { expect } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';

import App from '.app/app';
import AppDefault from '.app/app.css';

describe('<App />', () => {
  it('renders default app container with the correct className', () => {
    const primitive = render(<AppDefault />);
    const wrapper = render(<App />);

    expect(wrapper.children()[0].attribs.class).to.eql(primitive.children()[0].attribs.class);
  });

  it('renders a default app div that takes up the whole page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.nodes[0].type.displayName).to.eql('styled.div');
    expect(wrapper.nodes[0].type.rules[0]).to.contain('width: 100%;');
    expect(wrapper.nodes[0].type.rules[0]).to.contain('top: 0;');
    expect(wrapper.nodes[0].type.rules[0]).to.contain('bottom: 0;');
  });

  it('renders background of palegoldenrod when given nothing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.nodes[0].type.rules[0]).to.contain('background-color: palegoldenrod;');
  });
});
