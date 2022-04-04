import React from "react";
import profilePic from "../assets/images/teresaheadshot.png";

const styles = {
    border: "1px dashed red"
}

const About = () => {
  return (
    <section style={styles} id="about">
      <div>
          <h1>
            Hi, I'm Teresa!
            <img src={profilePic} alt="Teresa Schwirtlich" />
          </h1>
          <p>
            I was born and raised in Corpus Christi, TX. Watching my mother, an
            avid gamer, I became interested in computers and the internet from
            an early age. Instead of following my inital passions, I decided to
            pursue a degree in Geology and Petroleum Engineering from The
            University of Texas at Austin. I currently reside in Austin, TX with
            my dog, Juniper, who does not comprehend that she is not a human.
          </p>
          <div>
            <a
              href="#contact"
            >
              Let's Work Together!
            </a>
            <a
              href="#projects"
            >
              Check Out My Past Work!
            </a>
          </div>
      </div>
    </section>
  );
};

export default About;
