import React from 'react'

let commentsdData = [{
    name: 'vishwas',
    text: 'its good',
    replies: [{
        name: 'Arun',
        text: 'its good and nice',
        replies: [{
            name: 'Hemant',
            text: 'its can be more better',
            replies: [{
                name: 'Arun',
                text: 'its good and nice',
                replies: [{
                    name: 'Hemant',
                    text: 'its can be more better',
                    replies: [{

                    }]
                },
                {
                    name: 'Mohit',
                    text: 'its owesome',
                    replies: [{
                        name: 'Arun',
                        text: 'its good and nice',
                        replies: [{
                            name: 'Hemant',
                            text: 'its can be more better',
                            replies: [{

                            }]
                        },
                        {
                            name: 'Mohit',
                            text: 'its owesome',
                            replies: [{
                                name: 'Arun',
                                text: 'its good and nice',
                                replies: [{
                                    name: 'Hemant',
                                    text: 'its can be more better',
                                    replies: [{

                                    }]
                                },
                                {
                                    name: 'Mohit',
                                    text: 'its owesome',
                                    replies: [{

                                    }]
                                },]
                            }]
                        },]
                    }]
                },]
            }]
        },
        {
            name: 'Mohit',
            text: 'its owesome',
            replies: [{

            }]
        },]
    }]
},
{
    name: 'Navkar',
    text: 'its good',
    replies: [{
        name: 'Arun',
        text: 'its good and nice',
        replies: [{
            name: 'Hemant',
            text: 'its can be more better',
            replies: [{

            }]
        },
        {
            name: 'Mohit',
            text: 'its owesome',
            replies: [{

            }]
        },]
    }]
}
]
let img = "data:image/png;base64,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"

const Comment = ({ data }) => {
    return (
        <div className='flex ' >
            <img className='h-14' alt='image' src={img} />
            <div className='p-2' >
                <p>{data?.name}</p>
                <p>{data?.text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return comments?.map((comment, index) => {
        return (<div key={index}>
            <Comment data={comment} />
            <div className='ml-10' >
                <CommentList comments={comment.replies} />
            </div>
        </div>)
    })
}

const CommentsContainer = () => {

    return (
        <div className='mt-5' >
            <h1 className='font-bold' >CommentsContainer</h1>
            <CommentList comments={commentsdData} />
        </div>
    )
}

export default CommentsContainer