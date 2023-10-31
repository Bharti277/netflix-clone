import React, { useState } from "react";

function Home() {
  const [list, setList] = useState(["Deependra", "Bharti", "Avatar", "Random"]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);

  const addName = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return;
    }
    if (list.includes(trimmedName)) {
      alert("Name already exists. Please enter a different name.");
      return;
    }
    setList([...list, trimmedName]);
    setName("");
  };

  const deleteItem = (id) => {
    const filterVal = list.filter((_, i) => i !== id);
    setList(filterVal);
  };

  const editItems = () => {
    console.log("edit");
  };

  return (
    <div>
      <ul>
        {list.map((li, i) => (
          <li key={i}>
            {li}
            <button onClick={() => deleteItem(i)}>X</button>
            <button onClick={editItems}>Edit</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" onClick={addName} />
    </div>
  );
}

export default Home;
