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
                <p>Courses Category</p>
                {
                    categories.map(category => <p className='py-lg-5 my-lg-3'><NavLink to={`category/${category.id}`} className='text-decoration-none text-black' key={category.id}>{category.name}</NavLink></p>)
                }
            </div>
    );
};

export default SideNav;