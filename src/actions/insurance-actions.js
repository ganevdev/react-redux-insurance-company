export const CREATE_CLAIM = 'CREATE_CLAIM';
export const CREATE_POLICY = 'CREATE_POLICY';
export const DELETE_POLICY = 'DELETE_POLICY';

/**
 * createClaim
 */
export const createClaim = ({ name, amountOfMoneyToCollect }) => {
  return {
    type: CREATE_CLAIM,
    payload: {
      name: name,
      amountOfMoneyToCollect: Number(amountOfMoneyToCollect),
    },
  };
};

/**
 * createPolicy
 */
export const createPolicy = ({ name }) => {
  return {
    type: CREATE_POLICY,
    payload: {
      name: name,
      amount: 20,
    },
  };
};

/**
 * deletePolicy
 */
export const deletePolicy = ({ name }) => {
  return {
    type: DELETE_POLICY,
    payload: {
      name: name,
    },
  };
};
