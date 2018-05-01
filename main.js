import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from "./src/components/search.jsx"
import VideoDetails from "./src/components/video.jsx"
import VideoTileList from "./src/components/videotiles"
const API_KEY = "AIzaSyA59mJEGM_yK2LFxrU8H1XjtoQCp5sYjXo"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { videos : [],
      selectedVideo:null,
    searchTerm:""}
    this.videoSearch("surfboard")
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term}, videos =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
    })
  }

  

  render(){
    const videoSearch = _.debounce (term => {this.videoSearch(term)}, 300)
    
    return (
      <div>
        <SearchBar onSearchTerm={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoTileList videos={this.state.videos} 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
