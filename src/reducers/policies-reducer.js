import { CREATE_POLICY, DELETE_POLICY } from '../actions/insurance-actions';

// listOfPolicies are state
const policies = (listOfPolicies = [], action) => {
  switch (action.type) {
    case CREATE_POLICY:
      return [...listOfPolicies, action.payload.name];
    case DELETE_POLICY:
      return listOfPolicies.filter((policy) => {
        return policy.name !== action.payload.name.name;
      });
    default:
      return listOfPolicies;
  }
};

export default policies;
