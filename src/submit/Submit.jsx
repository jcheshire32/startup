import React from 'react'
import './submit.css'

export function Submit() {
    return (
        <div>
      <main>
        <h2>Submit a Gluten-Free Find</h2>
        <form>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="location">Where to Buy:</label>
            <input type="text" id="location" name="location" />
          </div>

          <button type="submit">Submit</button>
        </form>
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