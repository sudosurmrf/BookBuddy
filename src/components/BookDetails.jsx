import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from './Api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetchBookDetails(id);
      setBook(response);
    };
    getBookDetails();
  }, [id]);

  return (
    <>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    
    </>
  );
};

export default BookDetails;
