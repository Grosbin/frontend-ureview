import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { courseReducer } from "./courseReducer";
import { eventReducer } from "./eventReducer";
import { activityReducer } from "./activityReducer";
import { commentReducer } from "./commentReducer";
import { statisticsReducer } from "./statisticsReducer";




export const rootReducer = combineReducers({
	auth: authReducer,
	course: courseReducer,
	events: eventReducer,
	activities: activityReducer,
	comments: commentReducer,
	statistics: statisticsReducer
})