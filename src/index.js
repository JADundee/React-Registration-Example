import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import  { AuthProvider } from './context/AuthProvider';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


const container = document.getElementById('root')
const root = createRoot(container)

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

root.render(
  
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  
);