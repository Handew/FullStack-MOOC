import ReactDOM from 'react-dom'
import React from 'react';
import App from './App'
import Head from './Head'

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)