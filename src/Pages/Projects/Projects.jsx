import React, { useState } from "react";
import "./Projects.css";
import allProjects from "../../Assets/projects";
import CategoryButtons from "../../Assets/CategoryButtons";

import Project from "./Project";

function Projects() {
  const [filteredDatas, setFilteredDatas] = useState(allProjects);

  const buttonNames = ["All", "Java Script", "React", "Landing Page", "Other"];
  const filterHandler = (btnName) => {
    if (btnName === "All") {
      setFilteredDatas(allProjects);
      return;
    }
    const filtered = allProjects.filter((item) => item.type === btnName);
    setFilteredDatas(filtered);
  };

  return (
    <div>
      <div className="filter-buttons">
        {buttonNames.map((btn, index) => (
          <CategoryButtons
            filterHandler={filterHandler}
            key={index}
            btnName={btn}
          />
        ))}
      </div>
      <div className="projects-page">
        <div className="projects-box">
          {filteredDatas.length > 0 ? (
            filteredDatas.map((element, index) => (
              <Project key={index} {...element} />
            ))
          ) : (
            <h1>Coming soon...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
