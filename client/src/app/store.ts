import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//import treatmentReducer from '../features/treatment/treatmentSlice';
import registartionReducer from '../features/registrationSlice';
import productsReducer from '../features/products';
import  TrainersReducer  from '../features/trainerReducer';
import  offersReducer  from '../features/offers';
import  userReducer  from '../features/userReducer';

export const store = configureStore({
  reducer: {
    registrations: registartionReducer,
    counter: counterReducer,
    products:productsReducer,
    offers:offersReducer,
    trainers:TrainersReducer,
    user:userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
