import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from './Api.jsx';

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); 
        return;
      }

      try {
        const userDetails = await getUserDetails(token);
        setUser(userDetails);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
        navigate('/login'); 
      }
    };
    fetchUserDetails();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Account Details</h1>
      <p><strong>Username:</strong> {user.firstname} {user.lastname}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <h2>Checked Out Books</h2>
      <ul>
        {user.books.length > 0 ? (
          user.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))
        ) : (
          <p>No books checked out.</p>
        )}
      </ul>
    </div>
  );
};

export default Account;
