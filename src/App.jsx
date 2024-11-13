import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// Importing components
import About from '../other_stuff/components/About';
import Browse from '../other_stuff/components/Browse';
import Home from '../other_stuff/components/Home';
import Submit from '../other_stuff/components/Submit';

// Importing styles
import '../other_stuff/styles/about.css';
import '../other_stuff/styles/browse.css';
import '../other_stuff/styles/main.css';
import '../other_stuff/styles/submit.css';

function App() {

  return (
    <Router>
      <div className="app">
        {/* Navigation menu */}
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/browse">Browse</NavLink>
            </li>
            <li>
              <NavLink to="/submit">Submit</NavLink>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
