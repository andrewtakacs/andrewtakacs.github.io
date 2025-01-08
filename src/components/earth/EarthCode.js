import React, { useState, useEffect } from "react";
import "./EarthStyle.css";
import "../overlay/Overlay.css"

const EarthCode = () => {
  const [earthFrames, setEarthFrames] = useState([]); // Array to store ASCII frames
  const [currentFrame, setCurrentFrame] = useState(0); // Current frame index
  const [scrollPosition, setScrollPosition] = useState(0); // Scroll position

  // Function to adjust the visibility of the Earth component
  const adjustEarthVisibility = () => {
    const header = document.querySelector('.header');
    const earthContainer = document.querySelector('.earth-container');
    if (header && earthContainer) {
      const headerHeight = header.offsetHeight;
      const earthRect = earthContainer.getBoundingClientRect();
      
      // If the Earth is behind the header, set opacity to 0
      if (earthRect.top < headerHeight) {
        earthContainer.style.opacity = '0'; // Hide Earth behind header
      } else {
        earthContainer.style.opacity = '1'; // Show Earth when not behind header
      }
    }
  };

  // Load ASCII art frames from the files in the earth_frames folder
  useEffect(() => {
    const loadFrames = async () => {
      const totalFrames = 12; // Number of frames you have (update to 12)
      const frames = [];
      
      // Loop through the frames and load them
      for (let i = 1; i <= totalFrames; i++) {
        const response = await fetch(`/earthframes/earth${i}.txt`);
        const text = await response.text();
        frames.push(text);
      }

      setEarthFrames(frames); // Set loaded frames into state
    };

    loadFrames();
  }, []); // Only run once on component mount

  // Update scroll position and calculate the current frame
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add event listeners for scroll
    window.addEventListener('scroll', handleScroll);

    // Run the function initially to set the correct visibility on page load
    adjustEarthVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []); // Empty array ensures this effect runs once

  // Calculate the frame index based on the scroll position
  const frameIndex = Math.floor((scrollPosition / 30) % earthFrames.length);

  // Update current frame when scroll position changes
  useEffect(() => {
    setCurrentFrame(frameIndex);
  }, [frameIndex]);

  return (
    <div className="earth-container">
      <div className="earth-frame-container">
        <pre className="earth-frame">{earthFrames[currentFrame]}</pre>
      </div>
    </div>
  );
};

export default EarthCode;
