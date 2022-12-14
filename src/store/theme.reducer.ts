/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface IThemeState {
  isDark: string
}

const initialState: IThemeState = {
  isDark:
    localStorage.getItem('theme') !== null && JSON.parse(localStorage.getItem('theme') as string),
}

if (initialState.isDark === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.isDark === 'dark') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
      state.isDark = state.isDark === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', JSON.stringify(state.isDark))
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
