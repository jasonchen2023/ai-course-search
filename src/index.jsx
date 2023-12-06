import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';

const root = createRoot(document.getElementById('main'));
root.render(
  <App />,
);
