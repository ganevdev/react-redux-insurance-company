import { connect } from 'react-redux';

import { deletePolicy } from '../actions/insurance-actions';
import DeletePolicyForm from '../components/DeletePolicyForm';

const mapDispatchToProps = {
  deletePolicy,
};

export default connect(null, mapDispatchToProps)(DeletePolicyForm);
