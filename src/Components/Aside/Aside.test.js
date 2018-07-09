import React from 'react';
import { shallow } from 'enzyme';
import Aside from './';

describe('Aside', () => {
  let wrapper;
  let mockMovie;

  beforeEach(() => {
    mockMovie = { 
      title: 'Star Wars',
      scroll: 'Something about Star Wars',
      year: 1983
    };
    wrapper = shallow(<Aside movie={mockMovie}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});