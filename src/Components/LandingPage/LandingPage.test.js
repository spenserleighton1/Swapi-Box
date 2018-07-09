import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './';

describe('LandingPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});