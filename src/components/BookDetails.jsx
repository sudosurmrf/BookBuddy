import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookDetails } from './Api.jsx';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      console.log('Fetching book details for ID:', id);
      const response = await fetchBookDetails(id);
      setBook(response.book); // Accessing the book property directly
      console.log('Book details fetched:', response.book);
    };
    getBookDetails();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      <button onClick={handleBackClick}>Back to Books List</button>
    </div>
  );
};

export default BookDetails;
