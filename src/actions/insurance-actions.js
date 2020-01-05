export const CREATE_CLAIM = 'CREATE_CLAIM';
export const CREATE_POLICY = 'CREATE_POLICY';
export const DELETE_POLICY = 'DELETE_POLICY';

export const createClaim = (name, amountOfManyToCollect) => {
  return {
    type: CREATE_CLAIM,
    payload: {
      name: name,
      amountOfManyToCollect: amountOfManyToCollect,
    },
  };
};

export const createPolicy = (name) => {
  return {
    type: CREATE_POLICY,
    payload: {
      name: name,
      amount: 20,
    },
  };
};

export const deletePolicy = (name) => {
  return {
    type: DELETE_POLICY,
    payload: {
      name: name,
    },
  };
};
