import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 

import Fifteen from './questions/Fifteen'; // Make sure this path is correct
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fifteen />
    </BrowserRouter>
  </React.StrictMode>
);