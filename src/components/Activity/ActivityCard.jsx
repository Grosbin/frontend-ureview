
import React from 'react'


export const ActivityCard = ({title, count, icon}) => {

  return (
	<div className="col-12 md:col-6 lg:col-3">
	<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
		<div className="flex justify-content-between mb-3">
			<div>
				<span className="block text-500 font-medium mb-3">{title}</span>
				<div className="text-900 font-medium text-xl">{count}</div>
			</div>
			<div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
				<i className={`pi ${icon} text-xl`}></i>
			</div>
		</div>
	</div>
</div>
		);
}
