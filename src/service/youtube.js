class YoutubeFetch {
  constructor() {
    this.key = process.env.REACT_APP_YOUTUBE_API_KEY;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    let response;
    response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    if (response.status === 403) {
      console.log('403');
      response = await fetch(process.env.PUBLIC_URL + '/data/mostPopular.json').then(response => response.json());
      return response.items;
    }
    return result.items;
  };

  async search(query) {
    let response;
    response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    if (response.status === 403) {
      console.log('403');
      response = await fetch(process.env.PUBLIC_URL + '/data/searchData.json').then(response => response.json());
      return response.items.map(item => ({ ...item, id: item.id.videoId }));;
    }
    return result.items.map(item => ({ ...item, id: item.id.videoId }));

  };
}

export default YoutubeFetch;

