import React from "react";
import "./Projects.css";
import allProjects from "../../Assets/projects";

function Projects() {
  return (
    <div className="projects-page">
      <div className="filter-buttons">
        <button>All</button>
        <button>Java Script</button>
        <button>React</button>
        <button>Landing page</button>
        <button>Others</button>
      </div>
      {allProjects.map((element, index) => (
        <h4 key={index}>
          {index + 1}
          {element.description}
        </h4>
      ))}
    </div>
  );
}

export default Projects;
