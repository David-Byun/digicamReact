import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; //App.js파일로부터 App이라는 함수를 import한 것

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
