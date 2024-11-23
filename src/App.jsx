import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/Home';
import { Browse } from './browse/Browse';
import { About } from './about/About';
import { AuthState } from './login/authState';
import { Submit } from './submit/Submit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

// Importing styles
import '../src/about/about.css';
import '../src/browse/browse.css';
import '../src/home/main.css';
import '../src/submit/submit.css';

export function App() {

  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  const [userName, setUserName] = React.useState('');

  const handleAuthChange = (userName, newAuthState) => {
    setUserName(userName);
    setAuthState(newAuthState);
  };

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
            <Route path="/" element={ <Home
                  userName={userName}
                  authState={authState}
                  onAuthChange={handleAuthChange}
                />}/>
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