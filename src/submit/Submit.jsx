import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from '../login/messageDialog';
import './submit.css'
//I THINK THE ISSUE IN IN THIS FUNCTION????
export function Submit({ token }) {
  //starting empty
    const [productName, setProductName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [displayMessage, setDisplayMessage] = useState(null);

    async function submitFind() {
      if (!token){
        setDisplayMessage("Login or create an account to submit!");
        return;
      }
      
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({
          token,
          title: productName,
          description: brand + " - " + description + ". Available at: " + location, //try different styles
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response?.status === 200) {
        setDisplayMessage('Find submitted successfully! Thank you!');
        setProductName('');
        setBrand('');
        setDescription('');
        setLocation('');
      } else {
        const body = await response.json();
        setDisplayMessage(`⚠ Error: ${body.msg}`);
      }
    }
    //CHECK IF onChange IS WORKING LIKE SIMON
    return (
      <div className="container">
        <h2>Submit a Gluten-Free Find</h2>
        <div className="input-group mb-3">
          <span className="input-group-text">Product Name:</span>
          <input
            className="form-control"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            required/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Brand:</span>
          <input
            className="form-control"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
            required/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Description:</span>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required></textarea>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Location name:</span>
          <input
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where to Buy"/>
        </div>
        <Button variant="primary" onClick={submitFind} disabled={!productName || !brand || !description}>
          Submit
        </Button>
      </div>
    );
    //textarea instead of input for the description cause it can be long
}