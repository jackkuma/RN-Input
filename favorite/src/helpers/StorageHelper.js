import { AsyncStorage } from 'react-native'

/**
 * 
 * @param {*} key 
 * @param {*} value 
 * {string} name
 * {number} accountStatus: 0=none, 1=verifying, 2=verified, 3=error
 */

// export const setUserToken = (key, value) => AsyncStorage.setItem(key, value)
export const setMySetting = (key, value) => AsyncStorage.setItem(key, value)
export const getMySetting = (key) => AsyncStorage.getItem(key)