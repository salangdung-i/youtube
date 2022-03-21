import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeFetch from './service/youtube';



const youtubeFetch = new YoutubeFetch();
ReactDOM.render(
  <React.StrictMode>
    <App youtubeFetch={youtubeFetch} />
  </React.StrictMode>,
  document.getElementById('root')
);

