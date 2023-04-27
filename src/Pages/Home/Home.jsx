import React from "react";
import "./Home.css";
import certificate from "../../Assets/Images/certificate.png";
import eduInfos from "../../Assets/education";
import hobby from "../../Assets/hobby";
function Home() {
  return (
    <div className="home-page">
      {/* about me saction  */}
      {/* <div className="about">
        <h1 className="section-title">#About me</h1>
        <div className="about-box">
          <ul className="personal-info">
            <li>
              <span>Full name:</span> Abdullaev Bakhtiyor
            </li>
            <li>
              <span>Birthday:</span> 26.07.1995 (27 y.o.)
            </li>
            <li>
              <span>Degree:</span> Junior
            </li>
            <li>
              <span>Location:</span> Tashkent, Uzbekistan
            </li>
            <li>
              <span>Re location:</span> Yes
            </li>
          </ul>
          <ul className="contact-info">
            <li>
              <span>Linked in:</span> @Baxtiyor
            </li>
            <li>
              <span>Email:</span> bakhtiyor.abdullaev.frontend@gmail.com
            </li>
            <li>
              <span>Whats App:</span> +998939707302
            </li>
            <li>
              <span>Instagram:</span> @abdullayev_baxtiyor_
            </li>
            <li>
              <span>Phone number:</span> +998 77 009 73 02
            </li>
          </ul>
        </div>
      </div> */}

      {/* education saction  */}
      <div className="education">
        <h1 className="section-title">#Education</h1>
        <div className="education-box">
          {eduInfos.map((element, index) => (
            <ul className="edu-card" key={index}>
              <li className="edu-title">{`${element.title}`}</li>
              <li className="edu-name"> {`${element.name}`}</li>
              <li className="edu-status">{`"${element.status}"`}</li>
              <li className="edu-years">{`${element.years}`}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* interests section  */}
      <div className="hobby">
        <h1 className="section-title">#Interests</h1>
        <div className="hobby-box">
          {hobby.map((element, index) => (
            <ul className="hobby-card" key={index}>
              <li>{element.icon}</li>
              <li className="hobby-title">{element.title}</li>
              <li className="hobby-description">{element.description}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* certificate section  */}
      <div className="certificate">
        <h1 className="section-title">#Certificate</h1>
        <div className="certificate-box">
          <ul className="certificat-info">
            <li>
              <span>Learning centre name:</span> Fintech innovation hub
            </li>
            <li>
              <span>Course name:</span> Front-end full course
            </li>
            <li>
              <span>Teacher:</span> Otabek Fozilov
            </li>
            <li>
              <span>Location:</span> Tashkent, Uzbekistan
            </li>
            <li>
              <span>Tel:</span> +998712038800
            </li>
          </ul>

          <img
            src={certificate}
            className="certificate-image"
            alt="serticificate"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
