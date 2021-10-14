import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { SelectedServersProvider } from './context/datatable/selectedServers.js';

ReactDOM.render(
  <React.StrictMode>
    <SelectedServersProvider>
      <App />
    </SelectedServersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
