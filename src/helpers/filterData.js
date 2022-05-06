


export const filterData = (data, activities, uid) => {
	let filteredData = [];

	activities.forEach((i) => {
		data.forEach((j) => {
			if (i.id_activity === j.id && i.user._id === uid) {
				filteredData.push(j);
			}
		});
	});

	return filteredData;
}