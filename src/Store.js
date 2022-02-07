import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Components/Compteur/compteurSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})