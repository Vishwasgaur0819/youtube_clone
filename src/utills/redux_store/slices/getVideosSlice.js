import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const getVideosSlice = createApi({
    reducerPath: 'videos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/youtube/v3/',
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getState();
        //     console.log("getSTate", token)
        //     // If we have a token set in state, let's assume that we should be passing it.
        //     if (token) {
        //         headers.set('authorization', `Bearer ${token}`)
        //         headers.set('apptoken', ``)
        //     }

        //     return headers
        // },
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (apiKey) => `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=50&regionCode=IN&key=${apiKey}`, // Example API endpoint URL
        }),
    }),


})

export const { useGetVideosQuery, middleware: videoMiddleware } = getVideosSlice;

export default getVideosSlice.reducer;