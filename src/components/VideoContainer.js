import React, { useEffect, useState } from 'react'
import { videosListApi } from '../utills/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useGetVideosQuery } from '../utills/redux_store/slices/getVideosSlice';

const VideoContainer = () => {
    const data = useGetVideosQuery();
    const [videos, setVideos] = useState([]);

    const getYoutubeVideos = async () => {
        try {
            const data = await fetch(videosListApi);
            const json = await data.json();
            console.log('data test', json.items);
            setVideos(json.items);
        } catch (err) {
            console.error("🚀 ~ getYoutubeVideos ~ err:", err);
        }
    }

    useEffect(() => {
        getYoutubeVideos();
    }, [])

    return (
        <div className='flex' >
            {videos?.map((video) => <Link key={video.id} to={'/watch?v=' + video.id} ><VideoCard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer