import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './components/header/Header'; // Import your Header component
import Overlay from './components/overlay/Overlay'; // Import your Overlay component
import Contact from './components/pages/Contact'; // Import the Contact page component
import Footer from './components/footer/Footer'; // Import Footer component
import './App.css'; // Import your CSS
import Home from './components/home/Home'; // Import the Home component
import EarthCode from './components/earth/EarthCode'; // Import EarthCode component
import Hello from './components/hello/Hello'; // Import Hello component
import Space from './components/pages/Space'; // Import the Space page component
import './components/overlay/Overlay.css';  // Correct relative path if Overlay.css is in the same folder as Overlay.js


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/space" element={<Space />} /> {/* Space page at /space */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page at /contact */}
        <Route path="/earthcode" element={<EarthCode />} /> {/* EarthCode page at /earthcode */}
        <Route path="/hello" element={<Hello />} /> {/* Hello page at /hello */}
      </Routes>

      {/* Placeholder content to simulate scrolling */}
      {/* Footer component that includes the scroll-to-top button */}
      <Footer />
    </Router>
  );
};

export default App;
