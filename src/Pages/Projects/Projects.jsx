import React from "react";
import "./Projects.css";
import allProjects from "../../Assets/projects";

import Project from "./Project";

function Projects() {
  
  return (
    <div>
      <div className="filter-buttons">
        <button>All</button>
        <button>Java Script</button>
        <button>React</button>
        <button>Landing page</button>
        <button>Others</button>
      </div>
      <div className="projects-page">
        <div className="projects-box">
          {allProjects.map((element, index) => (
            <Project key={index} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
