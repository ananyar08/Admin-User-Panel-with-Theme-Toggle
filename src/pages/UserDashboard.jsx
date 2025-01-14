import React from "react";
import { useData } from "../context/DataContext"; // Import the useData hook
import { Users, LogOut } from "lucide-react"; // Add LogOut icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

const UserDashboard = () => {
  const { dataList } = useData(); // Get data from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear the role from localStorage
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            {" "}
            {/* Add space between items */}
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                User Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {" "}
              {/* Add spacing between buttons */}
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Data List */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {dataList.map((data) => (
                  <tr
                    key={data.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {data.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {data.email}
                    </td>
                  </tr>
                ))}
                {dataList.length === 0 && (
                  <tr>
                    <td
                      colSpan="2"
                      className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
