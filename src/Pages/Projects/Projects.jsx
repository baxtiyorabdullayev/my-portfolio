import React, { useState } from "react";
import "./Projects.css";
import allProjects from "../../Assets/projects";

// react icons
import { BsGlobe, BsGithub } from "react-icons/bs";
import { RxFigmaLogo } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";

function Projects() {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="projects-page">
      <div className="filter-buttons">
        <button>All</button>
        <button>Java Script</button>
        <button>React</button>
        <button>Landing page</button>
        <button>Others</button>
      </div>
      <div className="projects-box">
        {allProjects.map((element, index) => (
          <div key={index} className="project-card">
            <p className="project-title">{element.title}</p>
            <img
              className="project-image"
              src={element.image}
              alt={element.title}
            />
            <div className="project-buttons">
              <a className="project-link" href={element.demo} target="_blank">
                <BsGlobe></BsGlobe>
              </a>
              <a className="project-link" href={element.code} target="_blank">
                <BsGithub></BsGithub>
              </a>
              <a className="project-link" href={element.figma} target="_blank">
                <RxFigmaLogo></RxFigmaLogo>
              </a>
              <button
                id="project-button"
                className={`like-button ${isClicked && "liked"}`}
                onClick={handleClick}
              >
                <FiHeart></FiHeart>
                <span className="likes">{likes}</span>
              </button>
            </div>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
