import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-style">
        <div className="contact-details">
          <h4 className="footer-mail">Email</h4>
          <a href="mailto:saishj2903@gmail.com" className="mail">
            saishj2903@gmail
          </a>
        </div>
      </ul>
      <div className="social-container">
        <div className="copyright">
          <p className="copyright-sj">
            Coded With <FaHeart /> by{" "}
            <a href="https://github.com/saishj">SaishJ</a>
          </p>
        </div>
        <div className="icons">
          <a href="https://github.com/saishj" className="social-icons">
            <AiFillGithub style={{ height: "2rem", width: "2rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/saish-jagtap-4016111b6/"
            className="social-icons"
          >
            <AiFillLinkedin style={{ height: "2rem", width: "2rem" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
