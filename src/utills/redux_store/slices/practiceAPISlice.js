import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const practiceApiSlice = createApi({
    reducerPath: 'practice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://tspc-alembic.herokuapp.com/',
        mode: 'cors',
        prepareHeaders: (headers, { getState }) => {
            headers.set('apptoken', 'qU4vDFTbs9PZRkdBMcR5KSRR6Oo5SkCrb1giWIIER67D5XuxGy');
            headers.set('Content-Type', 'application/json;charset=utf-8');
            return headers
        },
        providesTags: ['Profile']
    }),
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: (empId) => `api/getProfile?employee_id=${empId}`,
        })
    })
})

export const { useGetProfileQuery, middleware: practiceMiddleware } = practiceApiSlice;
export default practiceApiSlice.reducer;