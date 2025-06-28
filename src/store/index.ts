import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Импорт редьюсеров, когда появятся
// import someFeatureReducer from '../features/someFeature/slice';

export const store = configureStore({
  reducer: {
    // someFeature: someFeatureReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Типизация хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
