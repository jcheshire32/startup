import React from 'react'
import './browse.css'

export function Browse() {
    return (
      <div>
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