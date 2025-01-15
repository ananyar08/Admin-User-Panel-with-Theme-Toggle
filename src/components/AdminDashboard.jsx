import React, { useState } from 'react';
import { useData } from '../context/DataContext';  // Import useData hook
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { dataList, addData, updateData, deleteData } = useData(); // Get data and functions from context
  const [editingData, setEditingData] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Handle form submission for Add and Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email) {
      alert('Please fill in both Username and Email.');
      return;
    }

    const newData = { id: Date.now(), username, email }; // Create new data object

    if (editingData) {
      // Update the existing data
      updateData({ ...editingData, username, email });
    } else {
      // Add new data to the list
      addData(newData);
    }

    // Reset form and state
    setUsername('');
    setEmail('');
    setEditingData(null);
  };

  // Handle edit operation
  const handleEdit = (data) => {
    setEditingData(data); // Set the data to be edited
    setUsername(data.username); // Set the username for editing
    setEmail(data.email); // Set the email for editing
  };

  // Handle delete operation
  const handleDelete = (id) => {
    deleteData(id); // Delete the data by ID
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('role'); // Remove the role from localStorage if you have stored it
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl space-y-8">
        <h2 className="text-4xl font-semibold text-center text-white dark:text-white mb-8">🖥️ Admin Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 mb-6 mx-auto block">
          🚪 Logout
        </button>

        {/* Form for Adding or Updating Data */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-700">
          <div className="space-y-3">
            <label htmlFor="username" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">👤 Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 dark:text-gray-300">📧 Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            {editingData ? '📝 Update Data' : '➕ Add Data'}
          </button>
        </form>

        {/* Display Data List */}
        <div className="space-y-6">
          {dataList.map((data) => (
            <div key={data.id} className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="text-lg text-gray-800 font-semibold dark:text-white">
                {data.username} - {data.email}
              </div>
              <div className="space-x-10">
                <button onClick={() => handleEdit(data)} className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                  ✏️
                </button>
                <button onClick={() => handleDelete(data.id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;




























































