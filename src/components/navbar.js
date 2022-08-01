import React from "react";

const navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navbar;
