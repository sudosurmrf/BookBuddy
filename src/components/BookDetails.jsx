import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookDetails, updateBookAvailability } from './Api.jsx';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetchBookDetails(id);
      setBook(response.book);
    };
    getBookDetails();
  }, [id]);

  const handleCheckoutReturn = async () => {
    try {
      const updatedBook = await updateBookAvailability(id, !book.available, token);
      setBook(updatedBook);
    } catch (error) {
      alert('Failed to update book availability. Please try again.');
    }
  };

  const handleBackClick = () => {
    navigate('/books');
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
      {token && (
        <button onClick={handleCheckoutReturn}>
          {book.available ? 'Check Out' : 'Return'}
        </button>
      )}
      <button onClick={handleBackClick}>Back to Books List</button>
    </div>
  );
};

export default BookDetails;
