import React from "react";
import './ItemVideo.css';
import moment from 'moment'

const ItemVideo =({video, onClick})=> {

    function onClickMe(e) {
        onClick(video);
    }

    return (
        <div className="four wide column">
            <div className="ui card">
                <div className="image video-item"  onClick={onClickMe}>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                </div>
                <div className="content">
                    <div className="description">
                        {video.snippet.description}
                    </div>
                    <div className="meta">
                        <span className="date">
                            uploaded {moment(video.snippet.publishedAt, 'YYYYMMDD').fromNow()}
                        </span>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="user icon"></i> {video.snippet.channelTitle}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemVideo;