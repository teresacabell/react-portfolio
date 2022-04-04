import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";

const styles = {
    border: "1px dashed green"
};

const Projects = () => {
    console.log(projects);
  return (
    <section id="projects" style={styles}>
      <h2 className="section-header">Previous Work</h2>
      <Wrapper projects={projects}/>
      {/* <div className="project-wrapper">

        {projects.map((project, index) => (
            <ProjectCard name={project.name} tech={project.tech} key={index} liveURL={project.liveURL} gURL={project.gURL}/>
        ))}

      </div> */}
    </section>
  );
};

export default Projects;
