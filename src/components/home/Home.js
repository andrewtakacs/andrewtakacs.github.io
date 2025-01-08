import React, { useState, useEffect, useMemo } from 'react';
import { useSprings, animated } from 'react-spring';

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Track the scroll position and window size
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);  // Update height on resize
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);  // Recalculate when the window resizes

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generate an array of stars with random sizes and slower speeds, memoized to prevent re-creation on every render
  const stars = useMemo(() => {
    return new Array(50).fill(0).map((_, index) => ({
      size: Math.random() * 2 + 0.5, // Random size between 0.5 and 2
      speed: (Math.random() * 0.5 + 0.2), // Reduced speed for slower movement
      x: Math.random() * window.innerWidth,
      y: Math.random() * (windowHeight + 500), // Start stars off-screen at the top
    }));
  }, [windowHeight]);  // Recompute stars array when window height changes

  // Create the springs for the stars using useSprings
  const springs = useSprings(
    stars.length, // The number of springs (same as the number of stars)
    stars.map((star) => ({
      to: { transform: `translateY(${scrollY * star.speed}px)` },
      config: { tension: 180, friction: 12 },
    }))
  );

  return (
    <div
      style={{
        position: 'static',
        backgroundColor: 'black',  // Set the background color to black
        height: '127vh',  // Ensure the container takes full height of the screen
        width: '100%',  // Make sure it stretches the full width
        overflow: 'visible',  // Hide overflow so stars don't get cut off
      }}
    >
      {/* Stars in the background */}
      <div
        style={{
          position: 'absolute',
          top: -180,
          left: 0,
          right: 0,
          bottom: -180,
          zIndex: 0,  // Make sure the stars are behind other content
          pointerEvents: 'none',  // Prevent stars from interfering with interactions
        }}
      >
        {stars.map((star, index) => (
          <animated.div
            key={index}
            style={{
              position: 'absolute',
              top: star.y,
              left: star.x,
              fontSize: `${star.size}rem`,
              color: 'white',  // Stars color remains white
              transform: springs[index].transform, // Use the animation here
            }}
          >
            {/* Small Unicode star character */}
            <span>*</span>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
