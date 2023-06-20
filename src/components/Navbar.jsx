import React from "react";
import { NavLink, Link } from "react-router-dom";
import { style } from "../utilities/styles";

// react icons
import { BiHomeAlt, BiBrain, BiCategory, BiPalette } from "react-icons/bi";
import { FiGithub, FiSun, FiMoon } from "react-icons/fi";
import { TbBrandTelegram, TbCertificate } from "react-icons/tb";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div className="p-4 w-full flex items-center justify-around ">
      <NavLink to="/" className="flex">
        <BiHomeAlt className={`${style.navbarMenuIcons}`} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/skills" className="flex">
        <BiBrain className={`${style.navbarMenuIcons}`} />
        <span>Skills</span>
      </NavLink>
      <NavLink to="/projects" className="flex">
        <BiCategory className={`${style.navbarMenuIcons}`} />
        <span>Works</span>
      </NavLink>
      <NavLink to="/certificates" className="flex">
        <TbCertificate className={`${style.navbarMenuIcons}`} />
        <span>Cetificates</span>
      </NavLink>
      <button>
        <FiSun className={`${style.navbarMenuIcons}`} />
      </button>
      <button>
        <BiPalette className={`${style.navbarMenuIcons}`} />
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
