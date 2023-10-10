import { combineReducers } from 'redux'
import { userData } from './reducersAll/userData'
import { Exercise } from './reducersAll/ExerciseeReducer'
import { Notification } from './reducersAll/Notification'
import { Workouts } from './reducersAll/workoutReducer'
const rootReducer = combineReducers({
    userData,
    Notification,
    Exercise,
    Workouts,
})
export default rootReducer