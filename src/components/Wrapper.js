import React from "react";
import ProjectCard from "./ProjectCard"

const Wrapper = (props) => {
    console.log(props);
    return (
       <div> {props.projects.map((project) => (
            <ProjectCard name={project.name} tech={project.tech} liveURL={project.liveURL} gURL={project.gURL}/> 
        ))}
        </div>
    )
}

export default Wrapper;
