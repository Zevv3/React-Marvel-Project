import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/rootslice'

export const store = configureStore ({
    reducer,
    devTools: true
});