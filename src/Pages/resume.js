import React, { useEffect } from 'react';
import '../CSS/resume.css';
import resume from "../Components/Ahmad_Hassaan_Resume.docx"

function Resume() {
  useEffect(() => {
    document.title = 'Resume - Ahmad Hassaan';
  }, []);

  return (
    <div id='container'>
      <h1 id='resume'>Resume</h1>
      <div id='resumePortion'>
        <h2>Experience</h2>
        <a href={resume} download>
        <button>Download Resume</button>
        </a>
      </div>
      <div id='exp'>
        <div id='workExperience'><span id='spanning'>2024 - 2025</span> <br /><span id='span3'>Web Developer</span> <br />
            Swift Structures LLC  <br />
            <span id='span2'>Lahore, Pakistan</span></div>
        <div id='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cupiditate sequi mollitia, omnis iure tenetur consequuntur consectetur doloribus officiis fugiat magnam repellendus veritatis totam distinctio, quia animi culpa! Possimus, veniam!</div>
      </div>
      <br />
      <br />
      <h2 id='edu'>Education</h2>
      <div id='exp'>
        <div id='workExperience'><span id='sp'>2023 - 2027</span> <br /><span id='span3'>Undergraduate</span> <br />
            Computer Science  <br />
            <span id='span2'>Lahore, Pakistan</span></div>
        <div id='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cupiditate sequi mollitia, omnis iure tenetur consequuntur consectetur doloribus officiis fugiat magnam repellendus veritatis totam distinctio, quia animi culpa! Possimus, veniam!</div>
      </div>
      <br />
      <div id='exp'>
        <div id='workExperience'><span id='sp'>2021 - 2023</span> <br /><span id='span3'>Intermediate</span> <br />
            Computer Science  <br />
            <span id='span2'>Lahore, Pakistan</span></div>
        <div id='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cupiditate sequi mollitia, omnis iure tenetur consequuntur consectetur doloribus officiis fugiat magnam repellendus veritatis totam distinctio, quia animi culpa! Possimus, veniam!</div>
      </div>
      <br /><br />
      <div id='portion'>
        <div className="card shadow border-0 rounded-4 mb-5">
         <div className="card-body p-5">
            <div className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
              </div>
              <div className="row row-cols-1 row-cols-md-3 mb-4">
                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Version Control with Git & GitHub</div></div>
                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">UI/UX Basics</div></div>
             </div>
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Problem Solving</div></div>
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Time Management</div></div>
                  <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Focused Design</div></div>
                </div>
              </div>
                <div className="mb-0">
                  <div className="d-flex align-items-center mb-4">
                  <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                  <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mb-4">
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                  <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React.JS</div></div>
                  <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                  <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C++</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <p id='copy'>© 2025 Ahmad Hassaan, Inc. All Rights Reserved  <a id="privacy" href="#!" onClick={(e) => e.preventDefault()}>Privacy |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Terms |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Resume;
