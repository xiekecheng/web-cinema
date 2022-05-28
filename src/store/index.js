import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import stateReducer from './reducers/stateSlice'
export default configureStore({
  reducer: {
    counter:counterReducer,
    state:stateReducer
  }
})