import React, { useEffect, useState } from 'react';
import './browse.css'

export function Browse(token) { //check if syntax is right
  const [finds, setFinds] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect (() => {
    async function browseFinds() {
      if (!token) {
        setErrorMessage('Login or create an account to browse!');
        return;
      }
      const response = await fetch(`/api/browse?token=${token}`); //same as before with checking for issues

      if (response?.status === 200) {
        const data = await response.json();
        setFinds(data);
      } else { //figure out error cases in another section of the project?
        setErrorMessage('Oops, unable to find any finds....');
      }

    }
    browseFinds();//actually call that function now
  }, token); //check syntax on authtoken stuff

  return ( //Am I making this harder than it needs to be?
    <div className="container">
      <h2>Browse Gluten-Free Finds</h2>
      {(() => {
        if (finds.length === 0) {
          return <p>No finds available. Submit one to get started!</p>;
        } else {
          return (
            <ul className="list-group">
              {finds.map((find) => (
                <li key={find.id} className="list-group-item">
                  <h4>{find.title}</h4>
                  <p>{find.description}</p>
                  <small>Submitted by: {find.user}</small>
                </li> ))}
            </ul>
          );
        }
      })()}
    </div>
    //maybe abstract it into a let content = ... type of thing then call it in the return
    //CHECK SYNTAX and if maps in Java are the same here
  );  
}