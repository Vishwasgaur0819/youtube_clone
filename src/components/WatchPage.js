import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { closeMenu } from '../utills/redux_store/slices/appSlice';


const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])


    useEffect(() => {
        const handleBackButton = () => {
            alert('hi')
            // Custom logic for handling the back button
            navigate('/'); // Navigate to a specific route
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [navigate]);


    return (
        <div className='flex flex-col w-full' >
            <div className='px-2 flex'>
                <div>
                    {/* <iframe
                        width="1100"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                        title="Yimmy Yimmy (Official Video) Jacqueline Fernandez | Tayc, Shreya Ghoshal | | New Song 2024 | MDN"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                    </iframe> */}
                </div>
                <div className='border rounded-lg overflow-y-scroll w-full' >
                    {/* <LiveChat /> */}
                </div>
            </div>
            {/* <CommentsContainer /> */}
        </div>

    )
}

export default WatchPage