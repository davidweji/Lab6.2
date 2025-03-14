import React from "react";
import "../styles/Projects.css";

function Projects() {
    return(
        <div className="projects text-center">
            <h1>My Projects</h1>
            <p className="top fw-bold">Some projects I have worked on in the past, and a current one I am working on.</p>

            <div className="my-5">
                <h2>Recent Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Dalhousie Chess Club</h3>
                                <p>Helped create a website from scratch for the Dalhousie Chess Club. My role was a junior developer and some of the contributions I did was creating the navbar, footer, organizers information page (about page) and I worked with basic react, html, and css.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">QuickCash App</h3>
                                <p>I am currently developing an Android app that deals with employers being able to post jobs for potential employee, and said employees searching for jobs. I am a developer in this project and some of the contributions I did was create the signup page, a search bar and filtering for searching for jobs, and I work with android: html, css, firebase database, and javascript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;