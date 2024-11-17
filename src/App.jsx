import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// Importing components
import About from './about/About';
import Browse from './browse/Browse';
import Home from './home/Home';
import Submit from './submit/Submit';

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
