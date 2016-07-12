import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {increment, decrement, asyncIncrement} from '../../actions/counter-actions';

export class Counter extends Component {

  render() {
    const { value, inAsync, onIncrement, onDecrement, onAsyncIncrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={onAsyncIncrement} disabled={inAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export const mapStateToProps = (state) => {
  return {
    value: state.counter.count,
    inAsync: state.counter.inAsync
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    },
    onAsyncIncrement: () => {
      dispatch(asyncIncrement());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
