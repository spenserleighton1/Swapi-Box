import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Card from './';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})

