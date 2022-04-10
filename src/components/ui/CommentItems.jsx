import React from 'react'
import { Avatar } from 'primereact/avatar';
import moment from 'moment';

export const CommentItems = ({ user, comment, date }) => {

	// moment.locale('es');
	const timeFormat = moment(date).locale('es-mx').format('MMMM Do YYYY, h:mm:ss a');
	
	return (
		<li>
			<div className="comment-main-level">
				<div className="comment-box shadow-2 border-0 border-round">
					<div className="comment-head bg-blue-50">
						<span className=' text-600 mr-2'>
							<Avatar label="U" shape="circle" className='mr-2 bg-blue-300' />
							{user}
						</span>
						{/* <p>hace 20 minutos</p> */}
						<span className=' text-yellow-500'>{timeFormat}</span>

					</div>
					<div className="comment-content p-5">
						{
							comment
						}
					</div>
				</div>
			</div>
		</li>
	)
}
