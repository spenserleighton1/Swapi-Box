import React from 'react';
import { shallow } from 'enzyme';
import Button from './index.js';

describe('Button', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallow(<Button />)
  });

  it('should match the snapshot', async () => {
    await expect(wrapper).toMatchSnapshot();
  });
});