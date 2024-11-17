import React from 'react';
import '../main.css';

function Home() {
  return (
    <div>
      <header>
        <img src="GFFlogo.png" alt="logo" width="100" height="100" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/submit">Submit a find</a></li>
            <li><a href="/browse">Browse finds</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <hr />
      </header>

      <main>
        <h1>Welcome to Gluten-Free Finds</h1>
        <p>Your go-to platform for finding the best gluten-free products out there.</p>
        <p>Browse our list, or contribute by submitting your own discoveries!</p>
      </main>

      <footer>
        <hr />
        <span className="text-reset">Author: James Cheshire</span>
        <br />
        <a href="https://github.com/jcheshire32/startup.git">GitHub</a>
      </footer>
    </div>
  );
}

export default Home;