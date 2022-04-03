import React from "react";
import profilePic from "../assets/images/teresaheadshot.png";

const styles = {
    border: "1px dashed red"
}

const About = () => {
  return (
    <section style={styles} id="about">
      <div className="container mx-auto flex ps-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start me:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Teresa!
            <img src={profilePic} alt="Teresa Schwirtlich" />
            <br className="hidden lg:inline-block" /> I like to build cool apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I was born and raised in Corpus Christi, TX. Watching my mother, an
            avid gamer, I became interested in computers and the internet from
            an early age. Instead of following my inital passions, I decided to
            pursue a degree in Geology and Petroleum Engineering from The
            University of Texas at Austin. I currently reside in Austin, TX with
            my dog, Juniper, who does not comprehend that she is not a human.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Let's Work Together!
            </a>
            <a
              href="#projects"
              className="ml-2 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check Out My Past Work!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
