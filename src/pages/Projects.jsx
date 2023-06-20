import React from "react";
import { style } from "../utilities/styles";
import allProjects from "../assets/projectsData";
import Project from "../components/Project";

function Projects() {
  return (
    <div className={`${style.pageStyle}`}>
      {/* page header  */}
      <div className="flex justify-between">
        <h1 className={`${style.pageTitle}`}>Works</h1>
      </div>

      {/* page items  */}
      <div className="mt-2 flex flex-wrap justify-evenly h-[90%] overflow-auto ">
        {allProjects.map((element, index) => (
          <Project key={index} {...element} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
