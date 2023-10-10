import React from "react";

function Filter({ onSortChange }) {
  const sorting = (event) => {
    const selectedValue = event.target.value;
    onSortChange(selectedValue);
  };

  return (
    <>
      <select
        id="sort"
        name="sort"
        onChange={sorting}
        style={{
          fontSize: "20px",
          padding: "5px 10px",
        }}
      >
        <option value="max">max-min</option>
        <option value="min">min-max</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </>
  );
}

export default Filter;
