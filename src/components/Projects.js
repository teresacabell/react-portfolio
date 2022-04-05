import React from "react";
import myProjects from "../data"
import ProjectCard from "./ProjectCard";

const sectionStyles = {
    padding: "20px",
    border: "2px solid green"
};

const wrapperStyle = {
  display: "flex"
};

const Projects = () => {
    console.log(myProjects);
  return (
    <section id="projects" style={sectionStyles}>
      <h2 className="section-header">Previous Work</h2>
      <div className="wrapper-project" style={wrapperStyle}>
        {myProjects.map((project) => (
          <ProjectCard name={project.name} key={project.id} tech={project.tech} image={project.image} liveURL={project.liveURL} gURL={project.gURL}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
