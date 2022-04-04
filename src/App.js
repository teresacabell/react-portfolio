import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
