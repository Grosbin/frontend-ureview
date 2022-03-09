import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { courseReducer } from "./courseReducer";
import { eventReducer } from "./eventReducer";


export const rootReducer = combineReducers({
	auth: authReducer,
	course: courseReducer,
	events: eventReducer
})