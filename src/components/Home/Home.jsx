import React, { useEffect, useState } from "react";
const API_P =
  "https://api.themoviedb.org/3/movie/550?api_key=98b67f15f209293466b881f4d7e03690";

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

  const fetchData = async () => {
    let res = await fetch(API_P);
    let resp = await res.json();
    console.log(resp);
  };

  useEffect(() => {
    fetchData();
  });
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
