import React from 'react';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import './styles.css';

const App = () => (
  <div className="App">
    <Navbar />
    <AppRoutes />
  </div>
);

export default App;
