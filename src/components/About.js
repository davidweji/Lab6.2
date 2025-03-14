import React from "react";
import "../styles/About.css";

function About() {
    return(
        <div className="about text-center">
            <h1>About me</h1>
            <p className="top fw-bold">Lean more about my  educational background, career aspirations, and technical skills</p>

            <div className="section">
                <h2>Education</h2>
                <div className="row g-3">
                    <div className="col-12">
                        <div className="item p-3 d-inline-block">
                            <h3>High School</h3>
                            <p>Grade 12 - West Kings District High</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="item p-3 d-inline-block">
                        <h3>University</h3>
                        <p>Bachelor of Applied Computer Science, year 3/4 - Dalhousie University</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Career Goals</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="item p-3 d-inline-block">
                            <h3>Cyber Security</h3>
                            <p>I would like to do something related to cyber security related to website safety.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="item p-3 d-inline-block">
                            <h3>Hardware Technician</h3>
                            <p>I am also interesting in computer hardware components in which I would like to help develop them.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Technical Skills</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>HTML</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>CSS</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>Java</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>JavaScript</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>SQL</h4>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill p-2 d-inline-block">
                            <h4>React</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;