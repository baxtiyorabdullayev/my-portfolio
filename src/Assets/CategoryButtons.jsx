import React from "react";

function CategoryButtons({ btnName, filterHandler }) {
  return <button onClick={() => filterHandler(btnName)}>{btnName}</button>;
}

export default CategoryButtons;
