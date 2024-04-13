import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { storeLiveChats } from '../utills/redux_store/slices/liveChatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.livechat.messages);
    const [message, setMessage] = useState('');
    useEffect(() => {

        const i = setInterval(() => {
            // console.log('polling is on')
            dispatch(storeLiveChats({
                name: 'Vishwas1',
                message: 'This is mission react is going on'
            }))
        }, 2000);
        return () => {
            clearInterval(i)
        }
    }, [])


    return (
        <>
            <div className='w-full h-[600px] border flex flex-col-reverse overflow-y-scroll ' >
                {chatMessages.map((chat, index) => <ChatMessage name={chat.name} key={index} message={chat.message} />)}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(storeLiveChats({ name: 'From button', message: message }));
            }} className='w-full flex items-center' >
                <input value={message} onChange={(e) => setMessage(e.target.value)} className='w-96 px-1 border-blue-500' />
                <button className='px-1 rounded-l bg-sky-300' >Send</button>
            </form>
        </>
    )
}

export default LiveChat