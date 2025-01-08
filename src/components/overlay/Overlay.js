import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css'; // Importing the CSS for Overlay

const Overlay = () => {
  const [isOverlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => {
    setOverlayActive(!isOverlayActive);
  };

  const toggleDropdown = (dropdownId, iconId) => {
    const dropdown = document.getElementById(dropdownId);
    const icon = document.getElementById(iconId);
    if (dropdown && icon) {
      dropdown.classList.toggle('active');
      icon.classList.toggle('active');
    }
  };

  // Add or remove the 'active' class from '.otherfull-width-line' and '<h1>' when 'isOverlayActive' changes
  useEffect(() => {
    const otherFullWidthLine = document.querySelector('.otherfull-width-line');
    const header = document.querySelector('h1');
    if (otherFullWidthLine) {
      if (isOverlayActive) {
        otherFullWidthLine.classList.add('active');
      } else {
        otherFullWidthLine.classList.remove('active');
      }
    }
  }, [isOverlayActive]);

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
      <div
        className={`overlay ${isOverlayActive ? 'active' : ''}`}
        id="overlay"
      >
        <button className="close" id="closeOverlay" onClick={toggleOverlay}>
          &times;
        </button>
        <hr className="otherfull-width-line" />
        <div className="categories">
          <div className="category-item">
            <div className="dropdown-icon">
              {/* About Me Button */}
              <Link to="/about">
                <button>About Me</button>
              </Link>
              <span
                className="dropdown-icon"
                id="aboutIcon"
                onClick={() => toggleDropdown('aboutDropdown', 'aboutIcon')}
              >
                &#9662;
              </span>
            </div>
            <div id="aboutDropdown" className="dropdown">
              {/* Overview Button */}
              <Link to="/overview">
                <button>Overview</button>
              </Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-header">
              {/* Projects/Experience Button */}
              <Link to="/projects">
                <button className="main-button">
                  Projects/Experience
                </button>
              </Link>
              <span
                className="dropdown-icon"
                id="projectsIcon"
                onClick={() => toggleDropdown('projectsDropdown', 'projectsIcon')}
              >
                &#9662;
              </span>
            </div>
            <div id="projectsDropdown" className="dropdown">
              <Link to="/project1">
                <button>Project 1</button>
              </Link>
              <Link to="/project2">
                <button>Project 2</button>
              </Link>
              <Link to="/project3">
                <button>Project 3</button>
              </Link>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              {/* Education Button */}
              <Link to="/education">
                <button className="main-button">
                  Education
                </button>
              </Link>
              <span
                className="dropdown-icon"
                id="educationIcon"
                onClick={() => toggleDropdown('educationDropdown', 'educationIcon')}
              >
                &#9662;
              </span>
            </div>
            <div id="educationDropdown" className="dropdown">
              <Link to="/education/details">
                <button>Details</button>
              </Link>
            </div>
          </div>

          <div className="category-item">
            <div className="category-header">
              {/* Blog Button */}
              <Link to="/blog">
                <button className="main-button">
                  Blog
                </button>
              </Link>
              <span
                className="dropdown-icon"
                id="blogIcon"
                onClick={() => toggleDropdown('blogDropdown', 'blogIcon')}
              >
                &#9662;
              </span>
            </div>
            <div id="blogDropdown" className="dropdown">
              <Link to="/blog/latest-posts">
                <button>Latest Posts</button>
              </Link>
              <Link to="/space">
                <button>Space</button>
              </Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-header">
              {/* Contact Button */}
              <Link to="/contact">
                <button className="main-button">
                  Contact
                </button>
              </Link>
              <span
                className="dropdown-icon"
                id="contactIcon"
                onClick={() => toggleDropdown('contactDropdown', 'contactIcon')}
              >
                &#9662;
              </span>
            </div>
            <div id="contactDropdown" className="dropdown">
              <Link to="/contact/get-in-touch">
                <button>Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="full-width-line" />
    </div>
  );
};

export default Overlay;
