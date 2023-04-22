import React, { useState } from "react";
import "./Projects.css";

// react icons
import { BsGlobe, BsGithub } from "react-icons/bs";
import { RxFigmaLogo } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";

function Project({ image, title, demo, code, figma, description }) {
  let likeQuentitiy = Math.random() * 1000;
  const [likes, setLikes] = useState(+likeQuentitiy.toFixed(0));
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
    <div className="project-card">
      <p className="project-title">{title}</p>
      <img className="project-image" src={image} alt={title} />
      <div className="project-buttons">
        <a className="project-link" href={demo} target="_blank">
          <BsGlobe></BsGlobe>
        </a>
        <a className="project-link" href={code} target="_blank">
          <BsGithub></BsGithub>
        </a>
        {figma ? (
          <a className="project-link" href={figma} target="_blank">
            <RxFigmaLogo></RxFigmaLogo>
          </a>
        ) : (
          <a className="hidden" href={figma} target="_blank" disabled>
            <RxFigmaLogo></RxFigmaLogo>
          </a>
        )}

        <button
          className={`like-button ${isClicked && "liked"}`}
          onClick={handleClick}
        >
          <FiHeart></FiHeart>
          <span className="likes">{likes}</span>
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Project;
