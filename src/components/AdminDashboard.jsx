import React, { useState } from 'react';
import { useData } from '../context/DataContext';  // Import useData hook
import DataForm from './DataForm';  // Import the DataForm component
import './admin-dashboard.css';  // Import the CSS file

const AdminDashboard = () => {
  const { dataList, addData, updateData, deleteData } = useData(); // Get data and functions from context
  const [editingData, setEditingData] = useState(null);

  const handleEdit = (data) => {
    setEditingData(data); // Set the data to be edited
  };

  const handleDelete = (id) => {
    deleteData(id); // Call delete function
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      {/* DataForm for adding/updating data */}
      <DataForm onSubmit={editingData ? updateData : addData} initialData={editingData || {}} />

      <div className="manage-data">
        <button className="add-data-button" onClick={() => setEditingData(null)}>
          Add Data
        </button>
      </div>

      {/* Display Data as Unordered List */}
      <ul className="data-list">
        {dataList.map((data) => (
          <li key={data.id} className="data-item">
            <span className="data-name">{data.name}</span> - {data.email}
            <div className="action-buttons">
              <button onClick={() => handleEdit(data)} className="edit-button">
                Edit
              </button>
              <button onClick={() => handleDelete(data.id)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;



















