import { combineReducers } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';
import liveChatSlice from './slices/liveChatSlice';
import getVideosSlice from './slices/getVideosSlice';
import practiceApiSlice from './slices/practiceAPISlice';

const rootReducer = combineReducers({
    videos: getVideosSlice,
    practice: practiceApiSlice,
    app: appSlice,
    search: searchSlice,
    livechat: liveChatSlice,
})

let listOfReducersToBePersisted = [];  //comma seprated reducers which we want to persist
export { listOfReducersToBePersisted };
export default rootReducer;