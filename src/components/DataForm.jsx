import React, { useState } from 'react';

const DataForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the inputs before submitting
    if (name && email) {
      onSubmit({ name, email }); // Pass the data to onSubmit (addData or updateData)
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{initialData.id ? "Update" : "Add"} Data</button>
    </form>
  );
};

export default DataForm;



