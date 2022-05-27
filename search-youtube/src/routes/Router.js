import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App';
import VideoViewer from '../features/VideoViewer/VideoViewer';
import OwnVideoViewer from '../features/OwnVideoViewer/OwnVideoViewer';
import MusicViewer from '../features/PlayListViewer/PlayListViewer';

const Router =()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='videos' element={<VideoViewer/>}/>
                    <Route path='play-list' element={<MusicViewer/>}/>
                    <Route path='my-videos' element={<OwnVideoViewer/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;