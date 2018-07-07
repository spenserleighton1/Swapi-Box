import React from 'react';
import { shallow } from 'enzyme';
import Button from './index.js';

describe('Button', () => {
  let wrapper;
  let mockEvent;
  let mockHandleClick;
  let mockGetPeople;

  beforeEach(async () => {
    mockGetPeople = jest.fn()
    mockEvent = { preventDefault: jest.fn }
    mockHandleClick = jest.fn()
    wrapper = shallow(<Button 
                        // name="people"
                        // getPeople{ mockGetPeople }
                      />)
  })

  it('should match the snapshot', async () => {
    await expect(wrapper).toMatchSnapshot()
  })

  // it('should call handleClick when clicked', async () => {
  //   wrapper.find('.button').simulate('click');
  //   await expect(mockHandleClick(mockEvent)).toBeCalled();
  // });

  // it('handleClick should call getPeople when props.name is people', () => {
  // })

})