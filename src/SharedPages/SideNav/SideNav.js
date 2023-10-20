import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://30-minute-school-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
            <div className='bg-secondary-subtle text-center p-5  side-nav'>
                <h3>Courses <span className='text-danger'>Category</span></h3>
                {
                    categories.map(category => <p className='py-lg-5 my-lg-3'><NavLink to={`courses/${category.id}`} className='text-decoration-none text-black' key={category.id}>{category.name}</NavLink></p>)
                }
            </div>
    );
};

export default SideNav;