import { createAsyncThunk } from '@reduxjs/toolkit'
import { SIGN_IN_API } from '@utils/constant'

const loginUser = createAsyncThunk(
  'user/login',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(SIGN_IN_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()
      if (data.status !== 200 && data.accessToken === undefined) {
        return rejectWithValue(data.message)
      }
      return data
    } catch (error) {
      return rejectWithValue("User doesn't exist")
    }
  }
)

export default loginUser
