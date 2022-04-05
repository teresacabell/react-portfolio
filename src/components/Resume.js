import React from "react";
import resume from "../assets/downloads/TeresaSchwirtlichResume.PDF";

const resumeStyles = {
    padding: "20px"
}

const Resume = () => {
    return (
        <section style={resumeStyles} id="resume">
            <h2 className="section-header">Resume</h2>
            <p className="link-download"> Download my <a href={resume}>resume</a></p>

            <h3 className="list-header">Proficiencies</h3>
                <h4 className="front-end-prof">Front End</h4>
                    <ul className="prof-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                <h4 className="back-end-prof">Back End</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Sequelize/My</li>
                        <li>MongoDB</li>
                        <li>REST</li>
                    </ul>
        </section>
    );
};

export default Resume;