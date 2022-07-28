import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carReducer from "../features/car/car-slide"

export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});