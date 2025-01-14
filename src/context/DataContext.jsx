import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  const addData = (newData) => {
    setDataList((prevData) => [
      ...prevData,
      { id: Date.now(), name: newData.name, email: newData.email },
    ]);
  };

  const updateData = (updatedData) => {
    setDataList((prevData) =>
      prevData.map((data) =>
        data.id === updatedData.id ? { ...data, ...updatedData } : data
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
