import { configureStore } from '@reduxjs/toolkit';
import covidDataSlice from './slices/covidDataSlice';

export const store = configureStore({
  reducer: {
    covidData: covidDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;