import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { listOfReducersToBePersisted } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: listOfReducersToBePersisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
})

let persistor = persistStore(store);

export { store, persistor };

