export const CREATE_CLAIM = 'CREATE_CLAIM';
export const CREATE_POLICY = 'CREATE_POLICY';
export const DELETE_POLICY = 'DELETE_POLICY';

/**
 * createClaim
 */
export const createClaim = (data) => {
  const amountOfMoneyToCollect = Number(data.amountOfMoneyToCollect);
  return {
    type: CREATE_CLAIM,
    payload: {
      name: data.name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

/**
 * createPolicy
 */
export const createPolicy = (data) => {
  return {
    type: CREATE_POLICY,
    payload: {
      name: data.name,
      amount: 20,
    },
  };
};

/**
 * deletePolicy
 */
export const deletePolicy = (data) => {
  return {
    type: DELETE_POLICY,
    payload: {
      name: data.name,
    },
  };
};
