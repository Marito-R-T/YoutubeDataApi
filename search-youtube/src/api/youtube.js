import axios from 'axios';

const KEY = 'AIzaSyDORniWauV05mXGJpPSflhwy9PZP1Bf3IM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    },
    headers: {}
})