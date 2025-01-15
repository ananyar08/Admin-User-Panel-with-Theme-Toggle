import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';  // Import the useData hook

const UserDashboard = () => {
  const { dataList } = useData(); // Get data from context
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Automatically detect dark mode based on system preferences
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div
        className={`w-full max-w-xl p-8 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        <h2 className="text-4xl font-semibold text-center mb-8">User Dashboard</h2>

        {/* Display Data List */}
        <ul className="space-y-6">
          {dataList.map((data) => (
            <li
              key={data.id}
              className={`flex justify-between items-center p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} transition`}
            >
              <div className="text-lg font-semibold">
                {data.username} - {data.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;











