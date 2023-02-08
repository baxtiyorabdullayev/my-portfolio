import React from "react";
import "./Contact.css";

// rect incons
import { RiContactsBookLine, RiLinkedinFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";
import { FaTelegramPlane, FaGithub, FaRegEnvelope } from "react-icons/fa";
import {
  MdPhone,
  MdOutlineLocationOn,
  MdOutlineAddLocationAlt,
} from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact-page">
      <div>
        <div className="contact-title">
          <RiContactsBookLine></RiContactsBookLine>
          <p>Contact</p>
        </div>
        <div className="contact-info">
          <div>
            <MdPhone></MdPhone>
            <span>+998 93 970 73 02</span>
          </div>
          <div>
            <MdPhone></MdPhone>
            <span>+998 77 009 73 02</span>
          </div>
          <div>
            <MdOutlineLocationOn></MdOutlineLocationOn>
            <span>Tashkent, Uzbekistan</span>
          </div>
          <div>
            <MdOutlineAddLocationAlt></MdOutlineAddLocationAlt>
            <span>Relocation - Yes</span>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-title">
          <BiLinkAlt></BiLinkAlt>
          <p>Contacts</p>
        </div>
        <div className="contact-info">
          <div>
            <FaGithub></FaGithub>
            <a href="https://github.com/baxtiyorabdullayev" target="_blank">
              Git Hub
            </a>
          </div>
          <div>
            <RiLinkedinFill></RiLinkedinFill>
            <a href="#no" target="_blank">
              Linked In
            </a>
          </div>
          <div>
            <FaRegEnvelope></FaRegEnvelope>
            <a
              href="mailto:bakhtiyor.abdullaev.frontend@gmail.com"
              target="_blank"
            >
              E-mail
            </a>
          </div>
          <div>
            <FaTelegramPlane></FaTelegramPlane>
            <a href="https://t.me/AbdullayevBaxtiyor" target="_blank">
              Telegram
            </a>
          </div>
          <div>
            <BsWhatsapp></BsWhatsapp>
            <a href="https://t.me/AbdullayevBaxtiyor" target="_blank">
              Whats App
            </a>
          </div>
          <div>
            <BsInstagram></BsInstagram>
            <a
              href="https://www.instagram.com/abdullayev_baxtiyor_/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
