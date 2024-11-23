import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { Browse } from './browse/Browse';
import { Submit } from './submit/Submit';
import { About } from './about/About';
import { AuthState } from './login/authState';
import './app.css';
import logo from '../GFFlogo.png';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body bg-tan text-black">
        <header className="container-fluid">
          <nav className="navbar fixed-top bg-tan text-black d-flex align-items-center">
            <img src={logo} alt="Gluten-Free Finds Logo" className="logo" />
            <div className="navbar-brand text-black ms-2">Gluten-Free Finds</div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/browse">
                  Browse
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/submit">
                  Submit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path="/browse" element={<Browse />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-tan text-black text-center mt-5 py-3">
          <div className="container-fluid">
            <span className="text-reset">Author: James Cheshire</span>
          <br />
            <a className="text-reset" href="https://github.com/jcheshire32/startup.git">GitHub </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center py-5">
      404: Page Not Found. Please check the URL.
    </main>
  );
}

export default App;
