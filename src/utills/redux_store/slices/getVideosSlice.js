import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const getVideosSlice = createApi({
    reducerPath: 'videos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/youtube/v3/',
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (apiKey) => `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=50&regionCode=IN&key=${apiKey}`, // Example API endpoint URL
        }),
    }),


})

export const { useGetVideosQuery, middleware: videoMiddleware } = getVideosSlice;

export default getVideosSlice.reducer;