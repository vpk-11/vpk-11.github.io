import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import accentReducer from './accentSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    accent: accentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;