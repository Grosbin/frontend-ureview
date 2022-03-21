
import moment from 'moment';

export const prepareData = (data = []) => {
	return data.map(item => ({
		...item,
		start: moment(item.start).toDate(),
		finish: moment(item.finish).toDate()
	})
	);
}