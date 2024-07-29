import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from './Api.jsx';
import BookOverlay from './BookOverlay.jsx';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response.books); // Assumes response.books is an array of book objects
    };
    getBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div>
      <h1>Library Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleBookClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
