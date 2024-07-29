import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import BookDetails from './BookDetails';
import Login from './Login';
import Register from './Register';
import Account from './Account';

const AppRoutes = () => (
  <Routes>
    <Route path="/books" element={<Books />} />
    <Route path="/books/:id" element={<BookDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/account" element={<Account />} />
    <Route path="/" element={<Books />} /> {/* Default route to Books */}
  </Routes>
);

export default AppRoutes;
