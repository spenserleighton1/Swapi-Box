import React from 'react';
import { shallow } from 'enzyme'
import CardContainer from './';

describe('CardContainer', () => {
  let wrapper;
  let mockPeopleData;
  let mockSelected;
  let mockAddFavorite;

  beforeEach(() => {
    mockAddFavorite = jest.fn();
    mockSelected = 'people';
    mockPeopleData = [{
      name: "Luke Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      homeworldPopulation: "200000"
    },{
      name: "Lisa Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      homeworldPopulation: "200000"
    }];
    wrapper = shallow(<CardContainer 
      people={ mockPeopleData } />);
  });

  it('should match the snapshot', () => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~', wrapper)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different cards depending on whats passed to displayCards', () => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~', wrapper)
    wrapper.instance().displayCards('people')

    expect(wrapper.find('.people').length).toEqual(2)

  });
});