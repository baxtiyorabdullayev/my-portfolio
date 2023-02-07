import React from "react";
import "./Skills.css";

// react icons
import { BiCodeAlt, BiGlobe } from "react-icons/bi";

function Skills() {
  return (
    <div className="skills-page">
      <div>
        <div className="skills-title">
          <BiCodeAlt></BiCodeAlt>
          <p>Technical</p>
        </div>
        <div className="skills-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
      <div>
        <div className="skills-title">
          <BiGlobe></BiGlobe>
          <p>Language</p>
        </div>
        <div className="skills-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
