import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BillingHome from '../../src/Components/BillingHome';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<BillingHome />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
