import React from 'react';
import '../styles/about.css'

//plain slash works for home
//check the picture works
function About() {
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
        <p>
          Gluten Free Finds was created with the goal of helping the gluten-free community
          work together to have an increased variety of food options.
        </p>
        <p>
          Gluten-free foods often are far inferior to their gluten counterparts, but not always!
          When you find a gluten-free item that impresses you, submit it so the gluten-free community
          can share in your delight!
        </p>
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

export default About;