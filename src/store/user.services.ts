import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserState } from './user.reducer'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/auth' }),
  endpoints: (builder) => ({
    signin: builder.mutation<
      IUserState,
      {
        username: string
        password: string
      }
    >({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSigninMutation } = userApi
export default userApi
