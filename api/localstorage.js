
import { AsyncStorage } from 'react-native'

//the local storage code noted below is really important.  Unlike webrowers that have local storage, react-native mobile apps use async storage in order to work with the 
//the data in state in real time.
//The async storage setup below connects to our api, pulling in the token like local storage that we use on our Shop Bro 2.0 web app.

export async function get(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
    
    if (value !== null){
      console.log(value)
    } 
  } catch (error) {  
  }
}

export async function set(key, value) {
  try {
    console.log('set')
    await AsyncStorage.setItem(key,value)
    console.log('setted')
    return value
  } catch (error) {
  }
}
