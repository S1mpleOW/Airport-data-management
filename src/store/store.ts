import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme.reducer'
import userReducer from './user.reducer'
import fetchReducer from './data.reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    refetch: fetchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
