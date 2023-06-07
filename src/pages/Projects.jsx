import React, { useState } from "react";
import { style } from "../utilities/styles";
import allProjects from "../assets/projectsData";
import CategoryButtons from "../components/CategoryButtons";
import Project from "../components/Project";

function Projects() {
  const [filteredProjects, setFilterdeProjects] = useState(allProjects);

  const buttonNames = ["Java Script", "React", "Landing Page"];

  const filterHandler = (buttonName) => {
    const filtered = allProjects.filter((item) => item.category === buttonName);
    setFilterdeProjects(filtered);
  };

  return (
    <div className={`${style.pageStyle}`}>
      {/* page header  */}
      <div className="flex justify-between">
        <h1 className={`${style.pageTitle}`}>Works</h1>
        <div className="flex">
          {buttonNames.map((btn, index) => (
            <CategoryButtons
              filterHandler={filterHandler}
              key={index}
              buttonName={btn}
            />
          ))}
        </div>
      </div>

      {/* page items  */}
      <div className="mt-2 flex flex-wrap justify-evenly h-[90%] overflow-auto ">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((element, index) => (
            <Project key={index} {...element} />
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Projects;
