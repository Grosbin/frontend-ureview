


export const filterData = (data, activities, uid) => {
	let filteredData = [];
	if (data.length > 0 && activities.length > 0) {
		activities.forEach((i) => {
			data.forEach((j) => {
				if (i.id_activity === j.id && i.user._id === uid) {
					filteredData.push(j);
				}
			});
		});
	}

	return filteredData;
}