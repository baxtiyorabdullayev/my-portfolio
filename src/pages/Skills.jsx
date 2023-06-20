import React from "react";
import { style } from "../utilities/styles";
import allSkills from "../assets/skillData";
import Skill from "../components/Skill";

// react icons

function Skills() {
  return (
    <div className={`${style.pageStyle}`}>
      <h1 className={style.pageTitle}>Skills</h1>
      <div className="mt-2 flex flex-wrap justify-between h-[90%] overflow-auto ">
        {allSkills.map((element, index) => (
          <Skill {...element} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
