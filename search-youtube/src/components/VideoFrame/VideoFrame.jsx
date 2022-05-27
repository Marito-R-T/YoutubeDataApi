import React from "react";
import './VideoFrame.css'

const VideoFrame =({video})=> {

    if (!video) {
        return (
            <div className="ui segment full-container">
                <p></p>
                <div className="ui active dimmer">
                    <div className="ui text loader">
                            Selecting Video ....
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="ui center aligned container">
            <div className="iframe-container">
                <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                    className='responsive-iframe'
                    title={video.snippet.title}
                    allowFullScreen></iframe>
            </div>
        </div>
    );

}

export default VideoFrame;