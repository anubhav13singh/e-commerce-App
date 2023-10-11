import React, { useContext, useEffect } from "react";
import { myContext } from "./Context";

function Filter({ setSelectedFilterOption }) {
  const { category, getCategory } = useContext(myContext);
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <select onClick={(e) => setSelectedFilterOption(e.target.value)}>
        {category.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
}

export default Filter;
