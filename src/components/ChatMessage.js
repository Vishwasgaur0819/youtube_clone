import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center' >
            <img className='h-10' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGMmExHRKg0KgcmgcSOj-ZJQcSvBWECBwCw&s' />
            <div className='mx-1' >
                <span className='font-bold' >{name}</span>
                <span className='mx-1' >{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage