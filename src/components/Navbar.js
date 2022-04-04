import React from "react";

const Navbar = () => {
  const pages = ["About", "Projects", "Resume", "Contact"];

  return (
    <header style={{ border: "1px solid black" }} className="navbar-list">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h1>Teresa Schwirtlich</h1>
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            About Me
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Previous Work
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Work Together
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
