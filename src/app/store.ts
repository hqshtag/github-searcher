import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../features/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)





export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
