import React, { useEffect } from 'react';
import { apiKey } from '../utills/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useGetVideosQuery } from '../utills/redux_store/slices/getVideosSlice';

const VideoContainer = () => {
    const { data, isLoading, refetch } = useGetVideosQuery(apiKey, { skip: false });
    console.log("data", data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='flex' >

            {data?.items?.map((video) => <Link key={video.id} to={'/watch?v=' + video.id} ><VideoCard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer