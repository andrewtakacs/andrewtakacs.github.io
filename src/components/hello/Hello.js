import React, { useState, useEffect } from "react";
import './Hello.css'; // Import the CSS file

const words = ["I'm an engineer.", "I'm a brother.", ":P", "I'm a hard worker.", "I like pineapple on pizza...", "Supercalifragilisticexpialidocious is my 2nd favorite word.", "To mine ores, youll need an iron pickaxe or better!"];

const HelloText = () => {
  // Default to "an engineer" and use an index to track the current word
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false); // Track button clicks

  // Handle the button click to change the word
  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setIndex(randomIndex);  // Set a random word from the array
    setClicked(true);  // Mark that the button has been clicked
  };

  // Resize text box when the text changes
  useEffect(() => {
    const textBox = document.querySelector('.textBox');

    if (textBox) {
      // Reset the size to auto before setting new height and width
      textBox.style.height = 'auto';
      textBox.style.width = 'auto';

      // Set the height based on scrollHeight and width based on scrollWidth
      textBox.style.height = `${textBox.scrollHeight}px`;
      textBox.style.width = `${textBox.scrollWidth}px`;
    }
  }, [index]); // Runs every time index changes

  return (
    <div className="wrapper">
      {/* Button to trigger word change */}
      <button onClick={handleButtonClick} className="changeButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-cw">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
      </button>

      {/* Text Box with additional border */}
      <div className="textBoxContainer">
        <div className="textBox">
          <span>Hello, I am Andrew Takacs! </span>
          <span>{words[index]}</span> Welcome to my Website!
        </div>
      </div>
    </div>
  );
};

export default HelloText;
