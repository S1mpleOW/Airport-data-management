/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface IThemeState {
  isLoading: boolean
  isFetching: boolean
}

const initialState: IThemeState = {
  isLoading: false,
  isFetching: false,
}

export const fetchSlice = createSlice({
  name: 'refetch',
  initialState,
  reducers: {
    refetch: (state) => {
      state.isFetching = !state.isFetching
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { refetch, setLoading } = fetchSlice.actions
export default fetchSlice.reducer
