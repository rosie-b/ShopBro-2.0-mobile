// const localStorage = global.window.localStorage

// console.log('localstorage')

// export function get (key) {
//   return //localStorage.getItem(key)
// }

// export function set (key, value) {
//   if(value === null) {
//     //localStorage.removeItem(key)
//   } else {
//     //localStorage.setItem(key, value)
//   }
// }

import { AsyncStorage } from 'react-native'

export function get(key) {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VyX25hbWUiOiJlbmdpZSIsInVzZXJfZW1haWwiOiJFbmdpZSIsImlhdCI6MTUyNjM0MDAwOSwiZXhwIjoxNTI2NDI2NDA5fQ.C0-VGaYi6ymqkSASrHG3190Kjav9HGvEcS1nd0GbCDE"
  // try {
  //   const value = await AsyncStorage.getItem(key);
  //   return value
    
  //   // if (value !== null){
  //   //   console.log(value)
  //   // } 
  // } catch (error) {
  // //Error retrieving data   
  // }
}

export function set(key, value) {
  // try {
  //   console.log('set')
  //   await AsyncStorage.setItem(key,value)
  //   console.log('setted')
  //   return
  // } catch (error) {
  //   //Error saving data
  // }
}
