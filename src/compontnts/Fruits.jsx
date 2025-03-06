import React, { useState } from "react";
import { fruits } from "./data";
const Fruits = () => {
  const [fruit, setFilteredFruit] = useState(fruits);
  const [search, setSearch] = useState("");
  const handleSearch = (searchTerm) => {
    const data = fruits.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFruit(data);
  };
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    handleSearch(searchTerm);
  };
  const handleBoldChar = (fruit, searchTerm) => {
    const sFruit = fruit.toLowerCase();
    const sSearchTerm = searchTerm.toLowerCase();
    const index = sFruit.indexOf(sSearchTerm);
    if (index === -1) return fruit;
    const start = fruit.substring(0, index);
    const center = fruit.substring(index, index + searchTerm.length);
    const end = fruit.substring(index + searchTerm.length);
    return (
      <>
        {start}
        <b> {center}</b>
        {end}
      </>
    );
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search here"
        onChange={handleChange}
      />
      <div>
        {fruit.map((item, index) => (
          <p key={index}>{handleBoldChar(item, search)}</p>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
