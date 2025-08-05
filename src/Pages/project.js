import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import myImg from '../Components/qr_code.PNG';
import text from '../Components/textutils.PNG';
import img from '../Components/calculator.png';
import login from '../Components/login.PNG';
import land from '../Components/picture.PNG';

import '../CSS/projects.css';

function Project() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Projects - Ahmad Hassaan';
  }, []);

  return (
    <div className="page">
      <h1 className="project-heading">Projects</h1>

      <div className="project-wrapper">
        <div className="project-description">
          <h2>QR Code Generator</h2>
          <p>
            Built a responsive QR Code Generator that allows users to instantly
            create QR codes for any text or URL input. The application provides
            real-time code generation with a clean and minimal interface,
            making it easy to download or share the generated codes. This
            project highlights dynamic content rendering and user interaction
            in a modern web environment.
          </p>
        </div>
        <img
          className="project-image"
          src={myImg}
          alt="QR Code Generator"
        />
      </div>

      <div className="project-wrapper">
        <div className="project-description">
          <h2>TextUtils</h2>
          <p>
            React application for editing and manipulating text with features
            like word count, character count, case conversion, and whitespace
            removal. The app offers a fast, interactive UI, showcasing React
            hooks and component-based design.
          </p>
        </div>
        <img
          className="project-image"
          src={text}
          alt="TextUtils"
        />
      </div>

      <div className="project-wrapper">
        <div className="project-description">
          <h2>Calculator</h2>
          <p>
            Developed a simple yet functional calculator using React, showcasing
            core concepts like state management and component-based
            architecture. The project supports basic arithmetic operations with
            a clean and responsive UI.
          </p>
        </div>
        <img
          className="project-image"
          src={img}
          alt="Calculator"
        />
      </div>

      <div className="project-wrapper">
        <div className="project-description">
          <h2>Sign Up Page</h2>
          <p>
            Created a responsive and intuitive Sign Up page designed for
            seamless user authentication. The interface includes clearly labeled
            input fields, real-time validation feedback, and a prominent Sign Up
            button to enhance user experience. Special attention was given to
            accessibility and mobile responsiveness, ensuring the layout adapts
            well to all screen sizes. This project demonstrates a clean design
            approach suitable for modern web applications.
          </p>
        </div>
        <img
          className="project-image"
          src={login}
          alt="Sign Up Page"
        />
      </div>

      <div className="project-wrapper">
        <div className="project-description">
          <h2>Responsive Landing Page</h2>
          <p>
            Created a clean and responsive web page with a focus on user-friendly
            layout and accessibility. The design adjusts smoothly across
            different screen sizes, providing a consistent experience on both
            desktop and mobile devices.
          </p>
        </div>
        <img
          className="project-image"
          src={land}
          alt="Landing Page"
        />
      </div>

      <br />
      <br />
      <div className="call-to-action">
        <p>Let's build Something Together</p>
        <button className="contact-btn" onClick={() => navigate('/contact')}>
          Contact
        </button>
      </div>

      <div className="footer">
        <p>
          © 2025 Ahmad Hassaan, Inc. All Rights Reserved{' '}
          <a href="#!" onClick={(e) => e.preventDefault()}>Privacy |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Terms |</a>
          <a href="#!" onClick={(e) => e.preventDefault()}>Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Project;
