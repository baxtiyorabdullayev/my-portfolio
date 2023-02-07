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
            <span>Git Hub</span>
          </div>
          <div>
            <RiLinkedinFill></RiLinkedinFill>
            <span>Linked In</span>
          </div>
          <div>
            <FaRegEnvelope></FaRegEnvelope>
            <span>E-mail</span>
          </div>
          <div>
            <FaTelegramPlane></FaTelegramPlane>
            <span>Telegram</span>
          </div>
          <div>
            <BsWhatsapp></BsWhatsapp>
            <span>Whats App</span>
          </div>
          <div>
            <BsInstagram></BsInstagram>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
