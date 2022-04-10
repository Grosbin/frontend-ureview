import React from 'react'
import { Avatar } from 'primereact/avatar';

export const CommentItems = ({ user, time, comment }) => {
	return (
		<li>
			<div className="comment-main-level">
				<div className="comment-box shadow-2 border-0 border-round">
					<div className="comment-head bg-blue-50">
						<span className=' text-600 mr-2'>
							<Avatar label="U" shape="circle" className='mr-2 bg-blue-300' />
							usuario
						</span>
						{/* <p>hace 20 minutos</p> */}
						<span className=' text-yellow-500'>hace 20 minutos</span>

					</div>
					<div className="comment-content p-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
					</div>
				</div>
			</div>
		</li>
	)
}
