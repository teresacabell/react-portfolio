import React from "react";

const Navbar = () => {
  const pages = ["About", "Projects", "Resume", "Contact"];

  return (
    <header style={{ border: "1px solid black" }} className="navbar-list">
      <div>
        <h1>Teresa Schwirtlich</h1>

        <a href="#about">About Me</a>
        <nav>
          <a href="#projects">Previous Work</a>
        </nav>
        <a href="#contact">Reach Out</a>
        <nav>
          <a href="#resume">Resume</a>
        </nav>
        <nav>
          <a href="#footer">Links</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
