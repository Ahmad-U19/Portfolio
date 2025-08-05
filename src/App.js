import './App.css';
import Navbar from './Components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Changed from BrowserRouter
import Resume from './Pages/resume.js';
import Home from './Pages/home.js';
import Project from './Pages/project.js';
import Contact from './Pages/contact.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
