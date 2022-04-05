import React from "react";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  border: "2px solid green"
};

const nameStyle = {
  fontSize: "3em",
};


const Navbar = () => {
  const pages = ["About", "Projects", "Resume", "Contact", "Footer"];

  return (
    <header style={headerStyle} className="navbar-list">
      <h1 style={nameStyle} >Teresa Schwirtlich</h1>
      <div>
        <a href="#about">About Me</a>
        <nav>
          <a href="#projects">Previous Work</a>
        </nav>
        <nav>
          <a href="#resume">Resume</a>
        </nav>
        <a href="#contact">Reach Out</a>
        <nav>
          <a href="#footer">Links</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
