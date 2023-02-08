import React from "react";
import "./AboutMe.css";
import {
  BiUserCheck,
  BiBookReader,
  BiFootball,
  BiUser,
  BiCalendar,
} from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import { CgRename } from "react-icons/cg";
import { MdHeight } from "react-icons/md";
import { RiScales2Line } from "react-icons/ri";
import { FaSchool, FaUniversity, FaLaptop } from "react-icons/fa";
import {
  GiBlackBook,
  GiUnicorn,
  GiArcher,
  GiAirplaneDeparture,
  GiLightBulb,
} from "react-icons/gi";

function AboutMe() {
  return (
    <div className="about-page">
      <div>
        <div className="about-title">
          <BiUserCheck></BiUserCheck>
          <p>About Me</p>
        </div>
        <div className="about-info">
          <div>
            <BiUser></BiUser>
            <span>
              First name: <span className="bolded">Bakhtiyor</span>
            </span>
          </div>
          <div>
            <CgRename></CgRename>
            <span>
              Last name: <span className="bolded"> Abdullaev</span>
            </span>
          </div>
          <div>
            <BiCalendar></BiCalendar>
            <span>
              Date: <span className="bolded">26.07.1995</span>
            </span>
          </div>
          <div>
            <MdHeight></MdHeight>
            <span>
              Height: <span className="bolded">1.70 m</span>
            </span>
          </div>
          <div>
            <RiScales2Line></RiScales2Line>
            <span>
              Weight: <span className="bolded">68 kg</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="about-title">
          <BiBookReader></BiBookReader>
          <p>Education</p>
        </div>
        <div className="about-info">
          <div>
            <FaSchool></FaSchool>
            <span>
              Secondary education: <br />
              <span className="bolded">
                UNDER NamTII 2<sup>nd</sup> ACADEMIC LYCEUM
              </span>
            </span>
          </div>
          <div>
            <FaUniversity></FaUniversity>
            <span>
              Bachelor: <br />
              <span className="bolded">NAMANGAN STATE UNIVERSITY</span>
            </span>
          </div>
          <div>
            <FaLaptop></FaLaptop>
            <span>
              Programming: <br />
              <span className="bolded">FINTECH HUB</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="about-title">
          <BiFootball></BiFootball>
          <p>Interests</p>
        </div>
        <div className="about-info">
          <div>
            <GiBlackBook></GiBlackBook>
            <span id="bolded">Reading books</span>
          </div>
          <div>
            <GiLightBulb></GiLightBulb>
            <span id="bolded">Solving problems</span>
          </div>
          <div>
            <GiUnicorn></GiUnicorn>
            <span id="bolded">Start-ups</span>
          </div>
          <div>
            <GiArcher></GiArcher>
            <span id="bolded">Archery</span>
          </div>
          <div>
            <GiAirplaneDeparture></GiAirplaneDeparture>
            <span id="bolded">Traveling</span>
          </div>
        </div>
      </div>
      <div>
        <div className="about-title">
          <TbCertificate></TbCertificate>
          <p>Certificate</p>
        </div>
        <div className="about-info">
          <span className="bolded">Coming soon!!!</span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
