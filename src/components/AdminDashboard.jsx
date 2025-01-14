import React, { useState } from 'react';
import { useData } from '../context/DataContext'; // Import useData hook
import DataForm from './DataForm'; // Import the DataForm component

const AdminDashboard = () => {
  const { dataList, addData, updateData, deleteData } = useData();
  const [editingData, setEditingData] = useState(null);

  const handleEdit = (data) => {
    setEditingData(data);
  };

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <DataForm onSubmit={editingData ? updateData : addData} initialData={editingData || {}} />
      <ul>
        {dataList.map((data) => (
          <li key={data.id}>
            {data.name} ({data.email})
            <button onClick={() => handleEdit(data)}>Edit</button>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;











