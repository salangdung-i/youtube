
import React from 'react';
import './app.css';
import YoutubeContent from './component/youtubeContent';
import YoutubeHeader from './component/youtubeHeader';

function App() {
  return (
    <div className="app">
      <YoutubeHeader />
      <YoutubeContent />
    </div>
  )
}

export default App;
