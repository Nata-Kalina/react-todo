import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Kalam"
    />

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
