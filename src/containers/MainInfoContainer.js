import { connect } from 'react-redux';

import {
  createClaim,
  createPolicy,
  deletePolicy,
} from '../actions/insurance-actions';
import MainInfo from '../components/MainInfo';

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

const MainInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainInfo);

export default MainInfoContainer;
