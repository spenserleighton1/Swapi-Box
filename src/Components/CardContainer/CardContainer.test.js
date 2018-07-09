import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './';

describe('CardContainer', () => {
  let wrapper;
  let mockPeopleData;

  beforeEach(() => {

    mockPeopleData = [{
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

    wrapper = shallow(<CardContainer 
      cards={ mockPeopleData } />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render different cards depending on whats passed to displayCards', () => {
  //   console.log('~~~~~~~~~~~~~~~~~~~~~~~', wrapper)
  //   wrapper.instance().displayCards('people')

  //   expect(wrapper.find('.people').length).toEqual(2)

  // });
});