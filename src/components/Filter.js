import React, { useEffect } from "react";

function Filter({ getCategory, category }) {
  useEffect(() => {
    getCategory();
  }, []);

  const filtering = (e) => {
    const selectedValue = e.target.value;
  };
  return (
    <>
      <select
        onChange={filtering}
        style={{
          fontSize: "20px",
          padding: "5px 10px",
        }}
      >
        {category.map((cat) => (
          <option>{cat}</option>
        ))}
      </select>
    </>
  );
}

export default Filter;
