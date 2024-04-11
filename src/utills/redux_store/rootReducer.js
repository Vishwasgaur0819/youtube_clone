import { combineReducers } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import searchSlice from './slices/searchSlice';
import liveChatSlice from './slices/liveChatSlice';

const rootReducer = combineReducers({
    app: appSlice,
    search: searchSlice,
    livechat: liveChatSlice,
})
let listOfReducersToBePersisted = [];  //comma seprated reducers which we want to persist
export { listOfReducersToBePersisted };
export default rootReducer;