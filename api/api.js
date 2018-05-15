import request from 'superagent'

import { get } from './localstorage'
import { isAuthenticated } from './auth'

// const baseURL = 'https://shopbro.herokuapp.com/api/'
const baseURL = 'http://192.168.1.110:3000/api/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  // const token = get('token')

  return get('token').then(token => {
    const headers = {
      Accept: 'application/json'
    }
    if(token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    console.log(baseURL + endpoint)

    return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      console.log('Heelo', err)
      throw err
    })
  })
}