import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducer';

export const store = configureStore({
    reducer: {
        user: messageReducer
    }
});