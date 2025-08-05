import React, { useEffect } from 'react';
import myImg from '../Components/pic.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Portfolio - Ahmad Hassaan';
  }, []);

  return (
    <div className="container">
      <div className="primary">
        <div className="text">
          Design &middot; Development &middot; Programming
        </div>
        <div className="shape">
          I can Shape your <br />
          <h1>
            <span>Ideas into Programming</span>
          </h1>
        </div>
      </div>
      <div className="button">
        <button id='bt1' onClick={() => navigate('/resume')}>Resume</button>
        <button id='bt2' onClick={() => navigate('/project')}>Projects</button>
      </div>
      <div id='img'>
        <img src={myImg} alt="" />
      </div>
      <div id="name">
        <h1> About Me </h1>
        <p id='developer'>My Name is Ahmad Hassaan and I am a Developer</p><br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fuga consequuntur temporibus labore, Lorem ipsum dolor sit amet.quia Lorem ipsum dolor sit amet consectetur adipisicing </p>
        <div className="d-flex justify-content-center fs-2 gap-4">
          <a className="text-gradient" href="https://www.x.com/ahmadhassaan21"><i className="bi bi-twitter"></i></a>
          <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
          <a className="text-gradient" href="https://www.github.com/Ahmad-U19"><i className="bi bi-github"></i></a>
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

export default Home;
