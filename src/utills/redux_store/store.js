import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import rootReducer, { listOfReducersToBePersisted } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { videoMiddleware } from './slices/getVideosSlice';
// import getVideosSlice from './slices/getVideosSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: listOfReducersToBePersisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(videoMiddleware),
})

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

