import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './style.min.css';

ReactDOM.render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
