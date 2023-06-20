import React, { useState } from "react";
import { style } from "../utilities/styles";

// react icons
import { BsGithub } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

function Project({ title, category, demo, code, image }) {
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
    <div className={`text-center ${style.cardBorder}`}>
      <img
        src={image}
        alt={title}
        className="rounded-md mx-auto w-full mb-3 "
      />
      <p className="font-poppins text-[#DADEE1] uppercase leading-[5px]">
        {title}
      </p>
      <span className="text-[12px] text-[#FFC107]">{category}</span>
      <div className="flex items-center justify-between text-[#DADEE1] w-full">
        <a
          className=" bg-[#5F5AF6] py-1 w-1/3 rounded-lg mx-1"
          href={demo}
          target="_blank"
        >
          <BsGlobe2 className="inline mr-3" />
          <span className="font-bold">Link</span>
        </a>
        <a
          className="bg-[#5F5AF6] py-1 w-1/3 rounded-lg mx-1"
          href={code}
          target="_blank"
        >
          <BsGithub className="inline mr-3" />
          <span className="font-bold"> Code</span>
        </a>

        <button
          className={`bg-[#384766] py-1 w-1/3 rounded-lg mx-1 ${
            isClicked && "bg-red-400"
          }`}
          onClick={handleClick}
        >
          <AiFillHeart className="inline mr-3" />
          <span className="font-bold">{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default Project;
