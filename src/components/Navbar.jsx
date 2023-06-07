import React from "react";
import { NavLink, Link } from "react-router-dom";
import { style } from "../utilities/styles";

// react icons
import { BiHomeAlt, BiBrain, BiCategory } from "react-icons/bi";
import { FiGithub, FiSun, FiMoon } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex flex-col w-16 h-screen justify-evenly text-center items-center">
      <NavLink to="/">
        <BiHomeAlt className={`${style.navbarMenuIcons}`} />
      </NavLink>
      <NavLink to="/skills">
        <BiBrain className={`${style.navbarMenuIcons}`} />
      </NavLink>
      <NavLink to="/projects">
        <BiCategory className={`${style.navbarMenuIcons}`} />
      </NavLink>
      <button>
        <FiSun className={`${style.navbarMenuIcons}`} />
      </button>
      <button>
        <FiMoon className={`${style.navbarMenuIcons}`} />
      </button>
      <Link to="https://github.com/baxtiyorabdullayev" target="_blank">
        <FiGithub className={`${style.navbarContactIcons}`} />
      </Link>
      <Link to="https://t.me/AbdullayevBaxtiyor" target="_blank">
        <TbBrandTelegram className={`${style.navbarContactIcons}`} />
      </Link>
      <Link to="#" target="_blank">
        <FaWhatsapp className={`${style.navbarContactIcons}`} />
      </Link>
      <Link
        to="https://www.instagram.com/abdullayev_baxtiyor_/"
        target="_blank"
      >
        <FaInstagram className={`${style.navbarContactIcons}`} />
      </Link>
    </div>
  );
}

export default Navbar;
