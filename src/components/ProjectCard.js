import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
    return (
       <Card key={props.key}>
           <Card.Title>{props.name}</Card.Title>
           <Card.Body>{props.tech}</Card.Body>
        <a href={props.liveURL}>
            <h4>Deployed Website</h4>
        </a>
        <a href={props.gURL}>
            <h4>GitHub Link</h4>
        </a>
       </Card>
    )
}

export default ProjectCard;