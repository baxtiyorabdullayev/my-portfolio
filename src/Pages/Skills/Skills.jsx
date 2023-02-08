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
          <div>
            <span className="tech">HTML5/CSS3: </span>
            <span className="percent"> 94%</span>
          </div>
          <div>
            <span className="tech">Responsive:</span>
            <span className="percent"> 80%</span>
          </div>
          <div>
            <span className="tech">Bootstrap5:</span>
            <span className="percent"> 89%</span>
          </div>
          <div>
            <span className="tech">Java Script/ES6:</span>
            <span className="percent"> 79%</span>
          </div>
          <div>
            <span className="tech">React/Redux:</span>
            <span className="percent"> 74%</span>
          </div>
          <div>
            <span className="tech">Git/GItHub:</span>
            <span className="percent"> 81%</span>
          </div>
        </div>
      </div>
      <div>
        <div className="skills-title">
          <BiGlobe></BiGlobe>
          <p>Language</p>
        </div>
        <div className="skills-info">
          <div>
            <span className="tech">Uzbek:</span>
            <span className="percent">Native</span>
          </div>
          <div>
            <span className="tech">Russian:</span>
            <span className="percent">B2</span>
          </div>
          <div>
            <span className="tech">English:</span>
            <span className="percent">B2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
