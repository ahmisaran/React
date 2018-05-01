import React from 'react'
import VideoTile from './videotile.jsx'

const VideoTileList = (props) =>{
    const VideoItems = props.videos.map((video)=>{
        return <VideoTile video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
    })
    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    )
}

export default VideoTileList