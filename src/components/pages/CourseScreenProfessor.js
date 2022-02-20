import React from 'react'
import { AddCourse } from '../Courses/AddCourse'
import { ListCourse } from '../Courses/ListCourse'

export const CourseScreenProfessor = () => {
	return (
		<div className='main'>
			<div className='course__container'>
				<AddCourse />
				<div className='course__list'>

					<ListCourse />
				</div>
			</div>
		</div>
	)
}
