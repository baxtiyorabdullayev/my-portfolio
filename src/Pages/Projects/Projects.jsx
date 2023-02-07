import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-filter">
        <button>All</button>
        <button>HTML/CSS</button>
        <button>JavaScript</button>
        <button>React</button>
      </div>
      <div className="projects-box">
        <div>
          <div className="projects-title">
            <p>Contact</p>
          </div>
          <div className="projects-info">
            <p>First name: Bakhtiyor</p>
            <p>Last name: Abdullaev</p>
            <p>Birth: 26.07.1995</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
