import { connect } from 'react-redux';

import {
  createClaim,
  createPolicy,
  deletePolicy,
} from '../actions/insurance-actions';
import Main from '../components/Main';

const mapStateToProps = (state) => {
  return {
    accounting: state.accounting,
    claimsHistory: state.claimsHistory,
    policies: state.policies,
  };
};

const mapDispatchToProps = {
  createClaim,
  createPolicy,
  deletePolicy,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
