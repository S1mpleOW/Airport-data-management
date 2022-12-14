/* eslint-disable import/prefer-default-export */
export const configHeaders = (
  token: string
): {
  headers: {
    'Content-Type': string
    Authorization: string
  }
} => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

const BASE_URL = 'http://localhost:8080/api'

export const SIGN_IN_API = `${BASE_URL}/auth/signin`
export const TICKET_API = `${BASE_URL}/ticket/`
export const CUSTOMER_API = `${BASE_URL}/customer/`
export const CATEGORY_API = `${BASE_URL}/ticket_type/`
export const FLIGHT_API = `${BASE_URL}/flight/`
export const AIRPORT_API = `${BASE_URL}/airport/`
