import { connect } from 'react-redux';

import { createClaim } from '../actions/insurance-actions';
import CreateClaimForm from '../components/CreateClaimForm';

const mapDispatchToProps = {
  createClaim,
};

export default connect(null, mapDispatchToProps)(CreateClaimForm);
