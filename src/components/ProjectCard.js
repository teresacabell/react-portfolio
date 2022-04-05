import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  width: "18em",
  border: "1px solid black",
  margin: "1em 1em 1em 1em",
};

const imageStyle = {
    width: "100%"
};

const ProjectCard = (props) => {
  return (
    <Card style={cardStyle} key={props.id}>
      <Card.Title>{props.name}</Card.Title>
      <Card.Img style={imageStyle} src={props.image} alt={props.title} />
      <Card.Body>{props.tech}</Card.Body>
      <a href={props.liveURL}>
        <h4>Deployed Website</h4>
      </a>
      <a href={props.gURL}>
        <h4>GitHub Link</h4>
      </a>
    </Card>
  );
};

export default ProjectCard;
