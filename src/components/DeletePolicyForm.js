import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deletePolicy } from '../actions/insurance-actions';

const DeletePolicyForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deletePolicy({ name }));
  };

  return (
    <div>
      <h4>Delete Policy Form</h4>
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
        <input type="submit" value="Delete Policy Form" />
      </form>
    </div>
  );
};

export default DeletePolicyForm;
