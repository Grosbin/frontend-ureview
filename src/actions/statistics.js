import { types } from "../types/types";



export const sumHoursVoaeAction = (hours) => {
	return (dispatch) => {
		// let sum = 0;
		// activity.forEach(element => {
		// 	if (element.id_activity === id_activity) {
		// 		sum += element.hours;
		// 	}
		// });

		// const sum = activity.map(element => element.hours).reduce((a, b) => a + b, 0);
		// console.log(sum)
		dispatch(sumHoursVoae(hours));
	}

}




const sumHoursVoae = (hours) => {
	return {
		type: types.sumHoursVoae,
		payload: hours
	};
}


export const sumCommentsAction = (comments) => {
	return (dispatch) => {
		dispatch(sumComments(comments));
	}
}

const sumComments = (comments) => {
	return {
		type: types.sumComments,
		payload: comments
	};
}

