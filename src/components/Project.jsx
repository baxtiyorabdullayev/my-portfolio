import React, { useState } from "react";

// react icons
import { BsGlobe, BsGithub } from "react-icons/bs";
import { RxFigmaLogo } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";

function Project({ title, image, demo, code, figma, description }) {
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
    <div className="w-[200px] m-2 bg-[#203b58]  text-center ">
      <p className="font-chakraPetch text-[#DADEE1] py-2">{title}</p>
      <img src={image} alt="project's image" />
      <div className="flex items-center justify-around mt-1 text-[#DADEE1]">
        <a className="" href={demo} target="_blank">
          <BsGlobe></BsGlobe>
        </a>
        <a className="" href={code} target="_blank">
          <BsGithub></BsGithub>
        </a>
        {figma ? (
          <a className="" href={figma} target="_blank">
            <RxFigmaLogo></RxFigmaLogo>
          </a>
        ) : (
          <a className="" href={figma} target="_blank" disabled>
            <RxFigmaLogo></RxFigmaLogo>
          </a>
        )}

        <button
          className={`like-button ${isClicked && "text-[#FFC107]"}`}
          onClick={handleClick}
        >
          <AiFillHeart></AiFillHeart>
        </button>
        <span className="">{likes}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Project;
