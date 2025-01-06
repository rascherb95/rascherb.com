// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import profileImage from './assets/ChryslerWithEagle.avif';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Homepage/Homepage/Home';
import Projects from './components/Homepage/ProjectCards/Projects';
import Contact from './components/Homepage/Contact/Contact';
import BetterBooks from './components/Projects/BetterBooks/BetterBooks';
import BookClubber from './components/Projects/BookClubber/BookClubber';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home profileImage={profileImage} />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BetterBooks" element={<BetterBooks />} />
        <Route path="/BookClubber" element={<BookClubber />} />
      </Routes>
    </Router>
  );
}

export default App;