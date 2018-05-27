import { AsyncStorage } from 'react-native'

export async function get(key) {
  // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VyX25hbWUiOiJlbmdpZSIsInVzZXJfZW1haWwiOiJFbmdpZSIsImlhdCI6MTUyNjM0MDAwOSwiZXhwIjoxNTI2NDI2NDA5fQ.C0-VGaYi6ymqkSASrHG3190Kjav9HGvEcS1nd0GbCDE"
  // set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VyX25hbWUiOiJlbmdpZSIsInVzZXJfZW1haWwiOiJFbmdpZSIsImlhdCI6MTUyNjM0MDAwOSwiZXhwIjoxNTI2NDI2NDA5fQ.C0-VGaYi6ymqkSASrHG3190Kjav9HGvEcS1nd0GbCDE").then(() => console.log('saved'))
  try {
    const value = await AsyncStorage.getItem(key);
    return value
    
    if (value !== null){
      console.log(value)
    } 
  } catch (error) {
  //Error retrieving data   
  }
}

export async function set(key, value) {
  try {
    console.log('set')
    await AsyncStorage.setItem(key,value)
    console.log('setted')
    return value
  } catch (error) {
    //Error saving data
  }
}
