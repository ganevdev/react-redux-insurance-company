import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const DeletePolicyForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'DELETE_POLICY', payload: { name } });
  };

  return (
    <div>
      <h2>Delete Policy Form</h2>
      <form onSubmit={handleSubmit}>
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
