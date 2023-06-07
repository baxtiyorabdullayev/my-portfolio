import React, { useState } from "react";

function CategoryButtons({ buttonName, filterHandler }) {
  return (
    <button
      onClick={() => {
        filterHandler(buttonName);
      }}
      className="px-2 mx-2 font-semibold border-b-2 text-[#BB86FC]"
    >
      {buttonName}
    </button>
  );
}

export default CategoryButtons;
