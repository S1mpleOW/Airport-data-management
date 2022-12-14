/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import loginUser from './user.action'

export interface IUserState {
  accessToken: string
  roles: string
  loading: boolean
  error: string
  isLoggedIn: boolean
}

interface IParseToken {
  exp: number
  sub: string
}

const parseJwt = (token: string): IParseToken | null => {
  try {
    return JSON.parse(window.atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

const userToken =
  localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem('token') as string) : ''

let isLoggedIn = false
const expirationTime = parseJwt(userToken)
if (expirationTime === null) {
  isLoggedIn = false
} else {
  const expiryTime = new Date(expirationTime.exp * 1000).getTime()
  const currentTime = Date.now()

  console.log(expiryTime)
  console.log(currentTime)

  if (currentTime >= expiryTime) {
    isLoggedIn = false
  } else {
    isLoggedIn = true
  }
}

const initialState: IUserState = {
  accessToken: userToken,
  loading: false,
  roles: '',
  error: '',
  isLoggedIn,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserState>) => {
      state.accessToken = action.payload.accessToken
      state.roles = action.payload.roles
    },
    logout: (state) => {
      state.accessToken = ''
      state.roles = ''
      state.isLoggedIn = false
      localStorage.removeItem('token')
      localStorage.removeItem('isLoggedIn')
    },
  },
  extraReducers: {
    [loginUser.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
      state.accessToken = action.payload.accessToken
      state.roles = action.payload.roles
      state.loading = false
      state.error = ''
      state.isLoggedIn = true
      localStorage.setItem('token', JSON.stringify(action.payload.accessToken))
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
    },
    [loginUser.pending.type]: (state) => {
      state.loading = true
      state.error = ''
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { addUser, logout } = userSlice.actions

export default userSlice.reducer
