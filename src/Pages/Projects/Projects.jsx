import React from "react";
import "./Projects.css";
import htmlCss from "../../Assets/htmlCss";
import javaCrtipt from "../../Assets/JavaScript";

// reactt icons
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";

function Projects() {
  return (
    <div className="projects-page">
      {/* html css section  */}
      <div className="html-css">
        <div className="projects-title">
          <TbBrandHtml5></TbBrandHtml5>HTML, <TbBrandCss3></TbBrandCss3>CSS
        </div>
        <div className="html-css-box">
          {htmlCss.map((element, index) => (
            <div className="html-css-card" key={index}>
              <p className="project-title">{element.title}</p>
              <img className="project-image" src={element.image} alt="photo" />
              <p className="project-description">{element.description}</p>
              <a className="project-link" href={element.link} target="_blank">
                Demo
              </a>
              <a className="project-link" href={element.code} target="_blank">
                Code
              </a>
              {element.figma ? (
                <a
                  className="project-link"
                  href={element.figma}
                  target="_blank"
                >
                  Figma
                </a>
              ) : (
                <a className="disabled" href={element.figma} target="_blank">
                  Figma
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* java script section  */}
      <div className="java-script">
        <div className="projects-title">
          <TbBrandJavascript></TbBrandJavascript>Java Script
        </div>
        <div className="java-script-box">
          {javaCrtipt.map((element, index) => (
            <div className="java-script-card" key={index}>
              <p className="project-title">{element.title}</p>
              <img className="project-image" src={element.image} alt="photo" />
              <p className="project-description">{element.description}</p>
              <a className="project-link" href={element.link} target="_blank">
                Demo
              </a>
              <a className="project-link" href={element.code} target="_blank">
                Code
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* react section  */}
      <div className="react">
        <div className="projects-title">
          <RiReactjsLine></RiReactjsLine>React
        </div>
        <div className="react-box"></div>
      </div>
    </div>
  );
}

export default Projects;
