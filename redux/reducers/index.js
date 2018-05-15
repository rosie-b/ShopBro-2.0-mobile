import { combineReducers } from 'redux'

import auth from './auth'
import dashboardShoppingListTotals from './dashboardShoppingListTotals'

export default combineReducers({
  auth,
  dashboardShoppingListTotals
})