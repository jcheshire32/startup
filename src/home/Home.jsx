import React from 'react';
import './main.css';

export function Home() {
  return (
    <div>
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