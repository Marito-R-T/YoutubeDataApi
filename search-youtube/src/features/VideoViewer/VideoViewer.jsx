import React, { useState, useEffect } from "react";
import VideoList from "../../components/VideoList/VideoList";
import VideoFrame from "../../components/VideoFrame/VideoFrame";
import { useOutletContext } from "react-router-dom";
import youtube from "../../api/youtube";

const VideoViewer =()=> {

    const [videos, setVideos] = useState([]);
    const [term, setTerm] = useOutletContext();
    const [videoSelected, setVideoSelected] = useState();
    const [page, setPage] = useState();

    const onSelectVideo = (video) => {
        setVideoSelected(video)
    }

    const onChangePage =(pagePosition)=> {
        youtube.get('/search',{
            params: {
                q: term,
                type: "video",
                pageToken: page[pagePosition]
            }
        }).then(response => {
            setVideos(response.data.items);
            setPage(response.data)
        });
    }

    useEffect( () => {
        async function getVideos() {
            const response = await youtube.get('/search', {
                params: { 
                    q: term,
                    type: "video"
                }
            })
            setVideos(response.data.items);
            setPage(response.data)
        }

        if(term) {
            getVideos();
        }

    }, [term])

    return (
        <>
            <div  className="ui container">
                <VideoFrame video={videoSelected} />
                <VideoList videos={videos} onClickVideo={onSelectVideo} page={page} onChangePage={onChangePage} />
            </div>
        </>
    );

}

export default VideoViewer;