import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// Create a root using createRoot
const root = createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);