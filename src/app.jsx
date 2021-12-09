
import React, { useEffect, useState } from 'react';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //request 시 옵션을 전달하는 부분
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA0pPim1uZsmWX-vuQeAejcxnIq1MdZGQY", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
    // fetch를 받아온 이후 처리한 부분

  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;