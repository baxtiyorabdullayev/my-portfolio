import "./NeoNavbar.css";
import React from "react";
import myPhoto from "../../Assets/Images/me.png";
import { NavLink } from "react-router-dom";

// react icons
import { BiUser, BiBrain, BiCustomize, BiPhone, BiSmile } from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";
import { SlEmotsmile } from "react-icons/sl";

function NeoNavbar() {
  return (
    <div className="neo-navbar">
      <NavLink to="/">
        <img
          src={myPhoto}
          alt="Front-end developer"
          width="180px"
          height="180px"
        />
      </NavLink>
      <div className="navbar-buttons">
        <NavLink to="/about" className="link">
          <BiUser></BiUser>
          About
        </NavLink>
        <NavLink to="/skills" className="link">
          <BiBrain></BiBrain>
          Skills
        </NavLink>
        <NavLink to="/projects" className="link">
          <BiCustomize></BiCustomize>
          Projects
        </NavLink>
        <NavLink to="/contacts" className="link">
          <BiPhone></BiPhone>
          Contacts
        </NavLink>
      </div>
      <div className="navbar-text">
        <h1 className="my-name">Abdullaev Bakhtiyor</h1>
        <h4 className="my-position">{"</Front-end developer>"}</h4>
        <p className="my-motto">
          <MdOutlineWavingHand></MdOutlineWavingHand> Hi there I'm the man who
          you're looking for, <br /> you know what I hacked NASA using HTML!
          <br /> Now trying hacked TESLA using CSS <SlEmotsmile></SlEmotsmile>
        </p>
      </div>
    </div>
  );
}

export default NeoNavbar;
