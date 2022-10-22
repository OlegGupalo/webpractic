
import {createWrapper} from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// import counterReducer from '../features/counter/counterSlice'

export function makeStore() {
  return configureStore({
    reducer: {
        
    }
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore);