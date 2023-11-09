import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';

const rootEl = document.getElementById('root');
const render = () => ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl
)

render();
