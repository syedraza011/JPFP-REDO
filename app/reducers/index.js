// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!
import { combineReducers } from 'redux'
import StudentReducer from './studentReducer'
import CampusReducer from './campusReducer'

export const initialState = {
  students: [],
  campuses: [],
  student: {},
  campus: {} 
}

const rootReducer = combineReducers({
  StudentReducer,
  CampusReducer
})

export default rootReducer  