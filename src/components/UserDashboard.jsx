// src/components/UserDashboard.jsx
import React from 'react';
import { useData } from '../context/DataContext';

const UserDashboard = () => {
  const { dataList } = useData();

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Data List</h3>
      <ul>
        {dataList.length === 0 ? (
          <li>No data available</li>
        ) : (
          dataList.map((data) => (
            <li key={data.id}>
              {data.name} ({data.email})
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserDashboard;








