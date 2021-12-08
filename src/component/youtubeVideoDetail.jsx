import React, { Component } from 'react';

class youtubeVideoDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-content">
          비디오 컨텐트 영역
          <div className="video-view"></div>
          <div className="video-detail"></div>
        </div>
        <div className="video-list">
          비디오리스트 영역
        </div>
      </div>
    );
  }
}

export default youtubeVideoDetail;