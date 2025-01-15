// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  const addData = (data) => {
    setDataList([...dataList, data]);
  };

  const updateData = (updatedData) => {
    setDataList(
      dataList.map((data) =>
        data.id === updatedData.id ? updatedData : data
      )
    );
  };

  const deleteData = (id) => {
    setDataList(dataList.filter((data) => data.id !== id));
  };

  return (
    <DataContext.Provider value={{ dataList, addData, updateData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
};

