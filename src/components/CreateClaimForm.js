import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createClaim } from '../actions/insurance-actions';

const CreateClaimForm = () => {
  const [name, setName] = useState('');
  const [amountOfMoneyToCollect, setAmountOfMoneyToCollect] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createClaim({ name, amountOfMoneyToCollect }));
  };

  return (
    <div>
      <h4>Create Claim Form</h4>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          onChange={(e) => setAmountOfMoneyToCollect(e.target.value)}
          name="amountOfMoneyToCollect"
          placeholder={0}
          type="number"
          value={amountOfMoneyToCollect}
        />
        <input type="submit" value="Create New Claim Form" />
      </form>
    </div>
  );
};

export default CreateClaimForm;
