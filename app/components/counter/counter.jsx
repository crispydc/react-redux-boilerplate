import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../../actions/counter-actions';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
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
        <button onClick={this.incrementAsync}>
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
    value: state
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
