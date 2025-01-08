import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Overlay from './components/overlay/Overlay'; // Import your Overlay component
import Contact from './components/pages/Contact'; // Import the Contact page component
import Footer from './components/footer/Footer'; // Import Footer component
import './App.css'; // Import your CSS
import Home from './components/home/Home'; // Import the Home component
import EarthCode from './components/earth/EarthCode'; // Import EarthCode component
import Hello from './components/hello/Hello'; // Import Hello component
import Space from './components/pages/Space'; // Import the Space page component
import Details from './components/pages/Details';
import './components/overlay/Overlay.css';  // Correct relative path if Overlay.css is in the same folder as Overlay.js
import About from './components/pages/About'; // Import About component
import Overview from './components/pages/Overview'; // Import Overview component
import Projects from './components/pages/Projects'; // Import Projects component
import Project1 from './components/pages/Project1'; // Import Project1 component
import Project2 from './components/pages/Project2'; // Import Project2 component
import Project3 from './components/pages/Project3'; // Import Project3 component
import Blog from './components/pages/Blog'; // Import Blog component
import LatestPosts from './components/pages/LatestPosts'; // Import LatestPosts component

const App = () => {
  return (
    <Router>
      {/* Routes for different pages */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} /> {/* Home page at / */}
        <Route path="/space" element={<Space />} /> {/* Space page at /space */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page at /contact */}
        <Route path="/earthcode" element={<EarthCode />} /> {/* EarthCode page at /earthcode */}
        <Route path="/hello" element={<Hello />} /> {/* Hello page at /hello */}
        <Route path="/about" element={<About />} /> {/* About page at /about */}
        <Route path="/overview" element={<Overview />} /> {/* Overview page at /overview */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page at /projects */}
        <Route path="/project1" element={<Project1 />} /> {/* Project 1 page at /project1 */}
        <Route path="/project2" element={<Project2 />} /> {/* Project 2 page at /project2 */}
        <Route path="/project3" element={<Project3 />} /> {/* Project 3 page at /project3 */}
        <Route path="/blog" element={<Blog />} /> {/* Blog page at /blog */}
        <Route path="/blog/latest-posts" element={<LatestPosts />} /> {/* Latest Posts page */}
      </Routes>

      {/* Footer component that includes the scroll-to-top button */}
      <Footer />
    </Router>
  );
};

export default App;
