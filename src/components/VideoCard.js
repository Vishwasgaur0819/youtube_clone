import React from 'react'

const VideoCard = ({ info }) => {
    // console.log("info of videos", info)
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='p-2 m-2 w-60 shadow-lg rounded-md' >
            {/* <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' /> */}
            <img className='rounded-lg' src={""} alt='thumbnail' />
            <ul>
                <li className='' >{title}</li>
                <li className='' >{channelTitle}</li>
                <li className='' >{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard