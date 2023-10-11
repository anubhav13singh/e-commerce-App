import React from "react";

function Sorting({ onSortChange }) {
  // const sorting = (event) => {
  //   const selectedValue = event.target.value;
  //   onSortChange(selectedValue);
  // };

  return (
    <>
      <select
        onChange={(e) => onSortChange(e.target.value)}
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

export default Sorting;
