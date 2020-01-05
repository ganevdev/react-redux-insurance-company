import { connect } from 'react-redux';

import { createPolicy } from '../actions/insurance-actions';
import CreatePolicyForm from '../components/CreatePolicyForm';

const mapDispatchToProps = {
  createPolicy,
};

export default connect(null, mapDispatchToProps)(CreatePolicyForm);
