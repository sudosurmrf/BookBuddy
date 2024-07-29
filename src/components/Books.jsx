import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from './Api.jsx';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response.books);
    };
    getBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div>
      <h1>Library Books</h1>
      <ul className="book-list">
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
