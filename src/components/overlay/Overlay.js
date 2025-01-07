import React, { useState } from 'react';
import './Overlay.css'; // Importing the CSS for Overlay

const Overlay = () => {
  const [isOverlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => {
    setOverlayActive(!isOverlayActive);
  };

  const toggleDropdown = (dropdownId, iconId) => {
    const dropdown = document.getElementById(dropdownId);
    const icon = document.getElementById(iconId);
    dropdown.classList.toggle('active');
    icon.classList.toggle('active');
  };

  return (
    <div>
      <div className="header">
        <h1>@</h1>
        <div className="menu-icon" id="menuIcon" onClick={toggleOverlay}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Overlay div that slides in */}
      <div className={`overlay ${isOverlayActive ? 'active' : ''}`} id="overlay">
        <button className="close" id="closeOverlay" onClick={toggleOverlay}>
          &times;
        </button>
        <div className="categories">
          <div className="category-item">
            <div className="category-header">
              <button className="main-button" onClick={() => window.location.href = 'about.html'}>
                About Me
              </button>
              <span className="dropdown-icon" id="aboutIcon" onClick={() => toggleDropdown('aboutDropdown', 'aboutIcon')}>
                &#9662;
              </span>
            </div>
            <div id="aboutDropdown" className="dropdown">
              <button onClick={() => window.location.href = 'about.html'}>Overview</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              <button className="main-button" onClick={() => window.location.href = 'projects.html'}>
                Projects/Experience
              </button>
              <span className="dropdown-icon" id="projectsIcon" onClick={() => toggleDropdown('projectsDropdown', 'projectsIcon')}>
                &#9662;
              </span>
            </div>
            <div id="projectsDropdown" className="dropdown">
              <button onClick={() => window.location.href = 'project1.html'}>Project 1</button>
              <button onClick={() => window.location.href = 'project2.html'}>Project 2</button>
              <button onClick={() => window.location.href = 'project3.html'}>Project 3</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              <button className="main-button" onClick={() => window.location.href = 'education.html'}>
                Education
              </button>
              <span className="dropdown-icon" id="educationIcon" onClick={() => toggleDropdown('educationDropdown', 'educationIcon')}>
                &#9662;
              </span>
            </div>
            <div id="educationDropdown" className="dropdown">
              <button onClick={() => window.location.href = 'education.html'}>Details</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              <button className="main-button" onClick={() => window.location.href = 'blog.html'}>
                Blog
              </button>
              <span className="dropdown-icon" id="blogIcon" onClick={() => toggleDropdown('blogDropdown', 'blogIcon')}>
                &#9662;
              </span>
            </div>
            <div id="blogDropdown" className="dropdown">
              <button onClick={() => window.location.href = 'blog.html'}>Latest Posts</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              <button className="main-button" onClick={() => window.location.href = 'contact.html'}>
                Contact
              </button>
              <span className="dropdown-icon" id="contactIcon" onClick={() => toggleDropdown('contactDropdown', 'contactIcon')}>
                &#9662;
              </span>
            </div>
            <div id="contactDropdown" className="dropdown">
              <button onClick={() => window.location.href = 'contact.html'}>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Overlay;