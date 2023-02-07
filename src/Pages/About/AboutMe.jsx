import React from "react";
import "./AboutMe.css";
import { BiUserCheck, BiBookReader, BiFootball } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

function AboutMe() {
  return (
    <div className="about-page">
      <div>
        <div className="about-title">
          <BiUserCheck></BiUserCheck>
          <p>About Me</p>
        </div>
        <div className="about-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
      <div>
        <div className="about-title">
          <BiBookReader></BiBookReader>
          <p>Education</p>
        </div>
        <div className="about-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
      <div>
        <div className="about-title">
          <BiFootball></BiFootball>
          <p>Interests</p>
        </div>
        <div className="about-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
      <div>
        <div className="about-title">
          <TbCertificate></TbCertificate>
          <p>Certificate</p>
        </div>
        <div className="about-info">
          <p>First name: Bakhtiyor</p>
          <p>Last name: Abdullaev</p>
          <p>Birth: 26.07.1995</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
