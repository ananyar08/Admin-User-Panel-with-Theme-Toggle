import React, { useState } from "react";
import { useData } from "../context/DataContext";
import DataForm from "./DataForm";
import { PlusCircle, Edit2, Trash2, Users, LogOut } from "lucide-react"; // Add LogOut icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminDashboard = () => {
  const { dataList, addData, updateData, deleteData } = useData();
  const [editingData, setEditingData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEdit = (data) => {
    setEditingData(data);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteData(id);
    }
  };

  const handleFormSubmit = (data) => {
    if (editingData) {
      updateData(data);
    } else {
      addData(data);
    }
    setShowForm(false);
    setEditingData(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear the role from localStorage
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={() => {
                setEditingData(null);
                setShowForm(true);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add New User
            </button>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ml-4"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {editingData ? "Edit User" : "Add New User"}
              </h2>
              <DataForm
                onSubmit={handleFormSubmit}
                initialData={editingData || {}}
                onCancel={() => {
                  setShowForm(false);
                  setEditingData(null);
                }}
              />
            </div>
          </div>
        )}

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
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
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
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(data)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4 focus:outline-none focus:underline"
                      >
                        <Edit2 className="h-5 w-5 inline" />
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 focus:outline-none focus:underline"
                      >
                        <Trash2 className="h-5 w-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
                {dataList.length === 0 && (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      No users found. Click "Add New User" to create one.
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

export default AdminDashboard;
