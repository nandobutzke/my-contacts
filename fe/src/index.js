import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import './lib/EventManager';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
