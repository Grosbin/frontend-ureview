import { types } from "../types/types";

const initialState = {
	events: [],
	active: null
}

export const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.activeEvent:
			return {
				...state,
				active: {
					...action.payload
				}
			}
		case types.addEvent:
			return {
				...state,
				events: [action.payload, ...state.events]
			}
		case types.editEvent:
			return {
				...state,
				events: state.events.map(events => events.id === action.payload.id ? action.payload.events : events)
			}
		case types.deleteEvent:
			return {
				...state,
				events: state.events.filter(events => events.id !== action.payload),
				active: null
			}
		case types.getEvent:
			return {
				...state,
				events: [...action.payload]

			}
		//Campo agragado

		default:
			return state;
	}
}