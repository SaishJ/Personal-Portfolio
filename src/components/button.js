import React from "react";
import Resume from "../assets/resume.pdf";

const button = () => {
  return (
    <div className="button-download" id="contact">
      <a href={Resume} download="Saish's Resume">
        <button type="button" className="download button">
          Download My Resume
        </button>
      </a>
    </div>
  );
};

export default button;
