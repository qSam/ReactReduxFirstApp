import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';


const API_KEY = 'AIzaSyD3o7QSIZ4qAYJ_LCDnlu8ymyEE0QQLHh8';


// Create a new component that produes HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'Surfing'}, (videos) => {
      this.setState({
             videos:videos,
             selectedVideo: videos[0]
            });
    });
  }

  render() {
        return (
         <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
         </div>
         );
       }
}


// Insert insert of App into Container DOM element
ReactDOM.render(<App />, document.querySelector('.container'));
