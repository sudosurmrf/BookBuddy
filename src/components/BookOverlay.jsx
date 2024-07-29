import React from 'react';
import './BookOverlay.css'; // Add CSS for styling the overlay

const BookOverlay = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookOverlay;
