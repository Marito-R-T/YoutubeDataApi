import React, { useState, useEffect } from "react";
import VideoList from "../../components/VideoList/VideoList";
import { useOutletContext } from "react-router-dom";
import youtube from "../../api/youtube";

const MusicViewer =()=> {

    const [videos, setVideos] = useState([]);
    const [term, setTerm] = useOutletContext();
    const [page, setPage] = useState();

    const onSelectVideo = (video) => {
        window.open(`https://www.youtube.com/playlist?list=${video.id.playlistId}`)
    }

    const onChangePage =(pagePosition)=> {
        youtube.get('/search',{
            params: {
                q: term,
                type: "playlist",
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
                    type: "playlist",
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
                <VideoList videos={videos} onClickVideo={onSelectVideo} page={page} onChangePage={onChangePage} />
            </div>
        </>
    );

}

export default MusicViewer;