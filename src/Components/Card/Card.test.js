import React from 'react';
import { shallow } from 'enzyme';
import Card from './';

describe('Card', () => {
  let wrapper;
  let mockInfo;
  let mockFavorite;

  beforeEach(() => {
    mockFavorite = jest.fn();
    mockInfo = [{
      name: "Luke Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      homeworldPopulation: "200000"
    }, {
      name: "Lisa Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      homeworldPopulation: "200000"
    }];

    wrapper = shallow(<Card 
      info={ mockInfo }
      favorite={ mockFavorite } />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call favorite when button is clicked', () => {
  //   wrapper.find('.card-button').simulate('click');
  //   expect(mockFavorite).toBeCalled();
  // })



});

