import { AUTH_TOKEN } from '../constants/auth'
import loginMutation from '../layouts/Public/gql/loginMutation'

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN) || null
const setAuthToken = token => localStorage.setItem(AUTH_TOKEN, token)

/**
 * @param {string} loginData.username
 * @param {string} loginData.password
 * @returns {Promise.<*>}
 */
export const login = async (loginData) => {
  try {
    const response = await loginMutation(loginData)

    const responseData = response.data
    const token = responseData.user.token

    setAuthToken(token)

    return response
  } catch(e) {
    // Handle possible errors
  }
}
