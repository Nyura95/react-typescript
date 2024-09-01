import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from '../api';
import counterReducer, { name } from '../features/counter/counterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: [name],
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [api.reducerPath]: api.reducer,
    [name]: counterReducer
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

setupListeners(store.dispatch);
