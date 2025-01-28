/*import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();*/


import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Manage service worker (if used)
serviceWorker.unregister();

