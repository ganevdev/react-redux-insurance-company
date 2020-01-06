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
      <h4>Create Policy Form</h4>
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
        <input type="submit" value="Create New Policy Form" />
      </form>
    </div>
  );
};

export default CreatePolicyForm;
