import {useRef} from 'react';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import{
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    Provider,
} from "react-redux";

import globalReducer from '@/state';
import {api} from '@/state/api';
import {setupListeners} from '@reduxjs/toolkit/query'

import{
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import {PersistGate} from 'redux-persist/react';
// import createWebStorage from 'redux-persist/lib/createWebStorage';