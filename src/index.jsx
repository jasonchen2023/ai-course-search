import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReactGA from 'react-ga4';
import App from './components/App';

ReactGA.initialize('G-C49DCEQHSF');

ReactGA.send({ hitType: 'pageview', page: '/', title: 'Custom Title' });


const root = createRoot(document.getElementById('main'));
root.render(
  <App />,
);

