import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('renders correctly', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.getElement(0)).toBeDefined();
  });
});
