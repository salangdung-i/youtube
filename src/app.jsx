import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';
import VideoDetail from './component/video_detail/video_detail';


const App = ({ youtubeFetch }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = useCallback(query => {
    setSelectedVideo(null);
    youtubeFetch
      .search(query)
      .then(videos => setVideos(videos));
  }, []);


  useEffect(() => {
    youtubeFetch
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtubeFetch]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.datail}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;

