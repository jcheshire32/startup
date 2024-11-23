import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// Importing components
import Header from './Header';
import About from './about/About';
import Browse from './browse/Browse';
import Home from './home/Home';
import Submit from './submit/Submit';

// Importing styles
import '../src/about/about.css';
import '../src/browse/browse.css';
import '../src/home/main.css';
import '../src/submit/submit.css';

function App() {

  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/submit" element={<Submit />} />
          </Routes> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
