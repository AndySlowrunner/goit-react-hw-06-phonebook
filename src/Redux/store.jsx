import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedRootReducer,
});

export const persistor = persistStore(store);