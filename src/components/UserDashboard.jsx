
import React from 'react';
import { useData } from '../context/DataContext';  // Import the useData hook
import './user-dashboard.css';  // Import the CSS file


const UserDashboard = () => {
  const { dataList } = useData(); // Get data from context

  return (
    <div className="user-dashboard-container">
      <h2 className="user-dashboard-title">User Dashboard</h2>

      {/* Display Data as Unordered List */}
      <ul className="data-list">
        {dataList.map((data) => (
          <li key={data.id} className="data-item">
            <div className="data-info">
              <span className="data-name">{data.name}</span>
              <span className="data-email">{data.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;








