import { connect } from 'react-redux';
import Counter from '../components/counter';

const mapStateToProps = (state) => {
  return {
    value: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrement: () => {
      dispatch({ type: 'DECREMENT' });
    }
  }
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
