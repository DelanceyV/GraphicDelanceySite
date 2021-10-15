import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './pages/main';

export default function App({ Component, pageProps }) {
 
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}
