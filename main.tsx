import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Load Remix Icons
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.min.css';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
