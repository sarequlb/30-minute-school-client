import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Category = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='container courses-container mt-4 mx-5'>
           {
            courses.map(course => <Course course={course}></Course>)
           }
        </div>
    );
};

export default Category;