import "./NeoNavbar.css";
import React from "react";
import myPhoto from "../../Assets/Images/me.png";
import { NavLink } from "react-router-dom";

// react icons
import {
  BiUser,
  BiBrain,
  BiCustomize,
  BiPhone,
  BiHomeAlt,
} from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";
import { SlEmotsmile } from "react-icons/sl";
import { FaTelegramPlane, FaGithub, FaLaptop } from "react-icons/fa";

function NeoNavbar() {
  return (
    <div className="navbar">
      <div className="navbar-menus">
        <img
          src={myPhoto}
          alt="Front-end developer"
          width="180px"
          height="180px"
        />
        <div className="navbar-buttons">
          <NavLink to="/" className="link">
            <BiHomeAlt></BiHomeAlt>
            Home
          </NavLink>
          <NavLink to="/skills" className="link">
            <BiBrain></BiBrain>
            Skills
          </NavLink>
          <NavLink to="/projects" className="link">
            <BiCustomize></BiCustomize>
            Projects
          </NavLink>
          <div className="mini-buttons">
            <a href="#">
              <FaGithub></FaGithub>
            </a>
            <a href="#">
              <FaTelegramPlane></FaTelegramPlane>
            </a>
            <a href="#">
              <FaLaptop></FaLaptop>
            </a>
            <a href="#">
              <BiPhone></BiPhone>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-text">
        <h1 className="my-name">Abdullaev Bakhtiyor</h1>
        <h4 className="my-position">{"</Front-end developer>"}</h4>
        <p className="my-motto">
          <MdOutlineWavingHand></MdOutlineWavingHand> Hi there I'm the front-end
          developer who you're looking for, <br /> you know what?... I hacked
          NASA using HTML!
          <br /> Now trying hacked TESLA using CSS <SlEmotsmile></SlEmotsmile>
        </p>
      </div>
    </div>
  );
}

export default NeoNavbar;
