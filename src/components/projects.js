import React from "react";
import Cards from "./cards";
import Button from "./button";
import Divider from "./divider";

const projects = () => {
  return (
    <div id="projects" className="project">
      <Divider />
      <h2 className="title">Projects</h2>
      <Cards />
      <Button />
    </div>
  );
};

export default projects;
