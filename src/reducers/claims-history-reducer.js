import { CREATE_CLAIM } from '../actions/insurance-actions';

// oldListOfClaims are state
const claimsHistory = (oldListOfClaims = [], action) => {
  switch (action.type) {
    case CREATE_CLAIM:
      return [...oldListOfClaims, action.payload];
    default:
      return oldListOfClaims;
  }
};

export default claimsHistory;
