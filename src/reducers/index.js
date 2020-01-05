import { combineReducers } from 'redux';

import accounting from './accounting-reducer';
import claimsHistory from './claims-history-reducer';
import policies from './policies-reducer';

/**
 * Company setup
 */
export default combineReducers({
  claimsHistory,
  accounting,
  policies,
});
