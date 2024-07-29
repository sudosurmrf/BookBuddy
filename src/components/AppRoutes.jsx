import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
// import BookDetails from './components/BookDetails';
// import Login from './components/Login';
// import Register from './components/Register';
// import Account from './components/Account';

const AppRoutes = () => (
  <Routes>
    <Route path="/books" element={<Books />} />
    {/* <Route path="/books/:id" element={<BookDetails />} /> */}
    {/* <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/account" element={<Account />} /> */}
  </Routes>
);

export default AppRoutes;
