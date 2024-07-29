import React from 'react';
import './BookOverlay.css';

const BookOverlay = ({ book, onClose }) => {
  if (!book) return null;
  
  

  return
  <>
    <h2 className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </h2>
  </>

}

export default BookOverlay;