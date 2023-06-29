// Commands

// cd file name
// npx json-server -p 3500 -w data/db.json 
// npm start 

// npx create-react-app Social_Media_Post_App

// Routers- BrowserRouter, HashRouter(# - Symbol), Memory Router(For Testing), staticServer, History Router.....




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <HashRouter>
    <App />
    </HashRouter> */}
  
  </React.StrictMode>
);
