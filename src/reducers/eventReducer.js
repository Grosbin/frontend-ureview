import { types } from "../types/types";

const initialState = {
	events: [
		{
			id: 1,
			name: 'Evento 1',
			ambit: 'Cultura',
			hoursVoae: 2,
			quotas: 23,
			startDate: '01/01/2020',
			finishDate: '01/01/2020',
			url: 'www.voae.com',
			description: 'Descripción del evento 1'
		},
		{
			id: 2,
			name: 'Evento 2',
			ambit: 'Social',
			hoursVoae: 2,
			quotas: 63,
			startDate: '01/01/2020',
			finishDate: '01/01/2020',
			url: 'www.voae.com',
			description: 'Descripción del evento 2'
		}],

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

		case types.getEvents:
			return {
				...state,
				events: action.payload
			}
		case types.loadEvent:
			return {
				...state,
				events: [...action.payload]

			}
		//Campo agragado

		default:
			return state;
	}
}