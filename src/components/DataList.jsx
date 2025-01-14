import React, { useState } from "react";

const DataList = ({ editable }) => {
  const [data, setData] = useState([{ id: 1, name: "Sample Item" }]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    setData([...data, { id: data.length + 1, name: newItem }]);
    setNewItem("");
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            {editable && <button onClick={() => handleDelete(item.id)}>Delete</button>}
          </li>
        ))}
      </ul>
      {editable && (
        <div>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="New item"
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
};

export default DataList;
