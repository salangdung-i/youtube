import React, { Component } from 'react';

class YoutubeHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img className="logo-img" src="images/logo.png" alt="youtube logo" />
          <span className="logo-text">Youtube</span>
        </div>

        <div className="header-search">
          <input className="search-input" type="text" />
          <button className="search-btn">
            <img className="search-img" src="images/search.png" alt="search img" />
          </button>
        </div>

      </div>
    );
  }
}

export default YoutubeHeader;