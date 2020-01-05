import { connect } from 'react-redux';

import { decrement, increment } from '../actions/main-actions';
import Main from '../components/Main';

const mapStateToProps = (state) => {
  return state.mainReducer;
};

const mapDispatchToProps = {
  increment,
  decrement,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
