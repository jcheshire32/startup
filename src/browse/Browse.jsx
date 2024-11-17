import React from 'react'
import '../browse.css'

function Browse() {
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
        <h2>Browse Gluten-Free Finds</h2>
        <div className="finds-list">
          <div className="find-item">
            <h3>Product Name</h3>
            <p>Brand: Example Brand</p>
            <p>Description: This is a delicious gluten-free product that you must try!</p>
            <p>Where to Buy: Available at major grocery stores.</p>
          </div>
        </div>
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

export default Browse;