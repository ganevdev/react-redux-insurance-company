import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPolicy } from '../actions/insurance-actions';

const CreatePolicyForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPolicy({ name }));
  };
  return (
    <div>
      <h2>Create Policy Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Name"
          type="text"
          value={name}
        />
        <input type="submit" value="Create New Policy Form" />
      </form>
    </div>
  );
};

export default CreatePolicyForm;
