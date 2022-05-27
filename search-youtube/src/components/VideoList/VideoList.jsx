import React from "react";
import ItemVideo from "../ItemVideo/ItemVideo";
import './VideoList.css'

const VideoList = (props) => {

    const onNextPage =(e)=> {
        props.onChangePage('nextPageToken');
    }

    const onPrevPage =(e)=> {
        props.onChangePage('prevPageToken');
    }

    return (
        <>
            {props.videos.length > 0 && <h1>Results of the search</h1>}

            <div className="ui grid">
                {props.videos.map( (video) => {
                    return (
                        <ItemVideo key={video.id.videoId? video.id.videoId : video.id.playlistId} video={video} onClick={props.onClickVideo}/>
                    )
                })}
            </div>
            {props.page && (<div className="ui horizontal divider header">
                {props.page.prevPageToken && <i className="caret left icon paginator-item" onClick={onPrevPage}></i>}
                <div className="letra">
                    <h5 >
                        Paginator
                    </h5>
                </div>
                {props.page.nextPageToken && <i className="caret right icon paginator-item" onClick={onNextPage}></i>}
            </div>) }
        </>
    )
}

export default VideoList;