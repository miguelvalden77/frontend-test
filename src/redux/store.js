// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducers';
import testReducer from "./test/reducers"

const store = configureStore({
    reducer: {
        user: userReducer,
        test: testReducer
    }
});

export default store;
