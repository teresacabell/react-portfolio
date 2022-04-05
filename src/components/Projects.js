import React from "react";
import myProjects from "../data"
import ProjectCard from "./ProjectCard";

const sectionStyles = {
    border: "1px dashed green",
    padding: "20px"
};

const wrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const Projects = () => {
    console.log(myProjects);
  return (
    <section id="projects" style={sectionStyles}>
      <h2 className="section-header">Previous Work</h2>
      <div className="wrapper-project" style={wrapperStyle}>
        {myProjects.map((project) => (
          <ProjectCard name={project.name} key={project.id} image={project.image} liveURL={project.liveURL} gURL={project.gURL}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
