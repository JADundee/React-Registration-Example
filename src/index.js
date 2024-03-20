import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import  { AuthProvider } from './context/AuthProvider';


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode> 
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);