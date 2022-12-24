import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css'
import './sass/index.scss'
import './css/flickity.css'
import App from './App';
import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
    <App />

  </HashRouter>
  </React.StrictMode>
);
