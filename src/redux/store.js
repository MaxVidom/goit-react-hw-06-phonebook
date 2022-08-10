import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}

const persistedContactsReducer = persistReducer(persistConfig, contactSlice.reducer)

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    
  },
  middleware(getDefaultMiddleware) {
     return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
    },
});

export const persistor = persistStore(store);