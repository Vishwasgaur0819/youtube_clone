import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheSearchResults: (state, action) => {
            // console.log('log from search slice', action.payload);
            if (Object.keys(state)?.length >= 100) {
                let firstKey = Object.keys(state)[0];
                delete state[firstKey]
            }
            state[action.payload[0]] = action.payload[1];
        }
    }
})


export const { cacheSearchResults } = searchSlice.actions;
export default searchSlice.reducer;