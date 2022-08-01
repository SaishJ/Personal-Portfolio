import React from "react";
import { projects } from "./data";

const cards = () => {
  return (
    <div className="cards">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.image} alt="..." className="project-img" />
          <div className="project-title">
            <h3 className="project-header">{project.title}</h3>
            <hr className="project-divider" />
          </div>
          <ul className="project-list">
            <a href={project.code}>
              <span className="badge rounded-pill project-links">Code</span>
            </a>
            <a href={project.live}>
              <span className="badge rounded-pill project-links">Live</span>
            </a>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default cards;
