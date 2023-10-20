import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='container courses-container mt-5 mx-5'>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;