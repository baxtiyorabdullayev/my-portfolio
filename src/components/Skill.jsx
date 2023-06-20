import React from "react";
import { style } from "../utilities/styles";

function Skill({ logo, skillName, bgColor }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#313E59] w-[300px] m-1 p-2  rounded-[5px]">
      <div
        className={`text-7xl text-[#DADEE1] p-4 rounded-full bg-[${bgColor}] `}
      >
        {logo}
      </div>
      <p className="font-chakraPetch text-[#c2c9d6] text-xl  font-bold mt-2">
        {skillName}
      </p>
    </div>
  );
}

export default Skill;

//#181818
