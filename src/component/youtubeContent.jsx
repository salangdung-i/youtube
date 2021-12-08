import React, { Component } from 'react';

class YoutubeContent extends Component {

  render() {
    return (
      <div className="container">
        <div className="video-list">
          비디오리스트 영역
          <ul>
            <li>
              <img src="" alt="썸네일이미지" />
              <span>썸네일 설명</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default YoutubeContent;