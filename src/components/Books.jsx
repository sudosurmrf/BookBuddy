import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from './Api.jsx';
import BookOverlay from './BookOverlay';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      setBooks(response.books); // Ensure this matches the actual structure of your API response
      console.log('Books fetched:', response.books);
    };
    getBooks();
  }, []);

  const handleBookClick = (bookId) => {
    console.log('Navigating to book details for ID:', bookId);
    navigate(`/books/${bookId}`);
  };

  const closeOverlay = () => {
    setSelectedBook(null);
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
      {selectedBook && <BookOverlay book={selectedBook} onClose={closeOverlay} />}
    </div>
  );
};

export default Books;
