import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  const addData = (newData) => {
    setDataList((prevData) => [
      ...prevData,
      {
        id: Date.now(),
        name: newData.name.trim(),
        email: newData.email.trim(),
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const updateData = (updatedData) => {
    setDataList((prevData) =>
      prevData.map((data) =>
        data.id === updatedData.id
          ? {
              ...data,
              ...updatedData,
              updatedAt: new Date().toISOString(),
            }
          : data
      )
    );
  };

  const deleteData = (id) => {
    setDataList((prevData) => prevData.filter((data) => data.id !== id));
  };

  return (
    <DataContext.Provider value={{ dataList, addData, updateData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
};
