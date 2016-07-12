import React from 'react';
import {shallow} from 'enzyme';

jest.unmock('../counter');
jest.unmock('../../../actions/counter-actions');

import {Counter, mapStateToProps, mapDispatchToProps} from '../counter';
import {increment, decrement} from '../../../actions/counter-actions';

describe('<Counter />', () => {
  it('outputs 3 buttons', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('button').length).toBe(3);
  });

  it('increments on first button click', () => {
    const incrementSpy = jasmine.createSpy('incrementSpy');
    const wrapper = shallow(<Counter onIncrement={incrementSpy} />);
    wrapper.find('button').at(0).simulate('click');
    expect(incrementSpy).toHaveBeenCalled();
  });

  it('decrements on second button click', () => {
    const decrementSpy = jasmine.createSpy('decrementSpy');
    const wrapper = shallow(<Counter onDecrement={decrementSpy} />);
    wrapper.find('button').at(1).simulate('click');
    expect(decrementSpy).toHaveBeenCalled();
  });

  it('asyncs on third button click', () => {
    const asyncSpy = jasmine.createSpy('asyncSpy');
    const wrapper = shallow(<Counter onAsyncIncrement={asyncSpy} />);
    wrapper.find('button').at(2).simulate('click');
    expect(asyncSpy).toHaveBeenCalled();
  });

  it('enables async button when inAsync=false', () => {
    const wrapper = shallow(<Counter inAsync={false} />);
    expect(wrapper.find('button').at(2).props().disabled).toBe(false);
  });

  it('disables async button when inAsync=true', () => {
    const wrapper = shallow(<Counter inAsync={true} />);
    expect(wrapper.find('button').at(2).props().disabled).toBe(true);
  });

  it('maps correct redux state to props', () => {
    const startState = {
      counter: {
        count: 3,
        inAsync: false
      }
    };

    expect(mapStateToProps(startState)).toEqual({
      value: 3,
      inAsync: false
    });
  });

  it('maps correct redux dispatch to props', () => {
    const dispatchSpy = jasmine.createSpy('dispatchSpy');
    const mappedProps = mapDispatchToProps(dispatchSpy);

    expect(mappedProps.onIncrement).toEqual(jasmine.any(Function));
    mappedProps.onIncrement();
    expect(mappedProps.onDecrement).toEqual(jasmine.any(Function));
    mappedProps.onDecrement();
    expect(mappedProps.onAsyncIncrement).toEqual(jasmine.any(Function));
    mappedProps.onAsyncIncrement();

    expect(dispatchSpy.calls.count()).toEqual(3);
    expect(dispatchSpy).toHaveBeenCalledWith(increment());
    expect(dispatchSpy).toHaveBeenCalledWith(decrement());
  });
});
