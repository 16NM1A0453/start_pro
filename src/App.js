import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillingHome from './Components/BillingHome';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<BillingHome />} />
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
