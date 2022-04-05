import React from "react";
import profilePic from "../assets/images/teresaheadshot.png";

const aboutStyles = {
  border: "2px solid green",
  padding: "20px",
  display: "flex",
};

const profPicStyles = {
  width: "80%",
  height: "auto",
  border: "5px solid green"
};

const aboutLinkStyles = {
  display: "grid"
};

const About = () => {
  return (
    <section style={aboutStyles} id="about">
      <div>
        <img style={profPicStyles} src={profilePic} alt="Teresa Schwirtlich" />
      </div>
      <div>
        <h1>Hi, I'm Teresa!</h1>
        <p>
          I was born and raised in Corpus Christi, TX. Watching my mother, an
          avid gamer, I became interested in computers and the internet from an
          early age. Instead of following my inital passions, I decided to
          pursue a degree in Geology and Petroleum Engineering from The
          University of Texas at Austin. I currently reside in Austin, TX with
          my dog, Juniper, who does not comprehend that she is not a human.
        </p>
        <div style={aboutLinkStyles}>
          <a href="#contact">Let's Work Together!</a>
          <br/>
          <a href="#projects">Check Out My Past Work!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
