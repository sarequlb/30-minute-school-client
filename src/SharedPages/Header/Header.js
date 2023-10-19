import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headerLogo from '../../images/header-logo.png'
import { Link, NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-secondary-subtle position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Image className='w-50' src={headerLogo} ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className = 'text-decoration-none text-black mx-4' to={'/courses'}>Courses</NavLink>
              <NavLink className = 'text-decoration-none text-black mx-4' to={''}>FAQ</NavLink>
              <NavLink className = 'text-decoration-none text-black mx-4' to={''}>Blog</NavLink>
            </Nav>
            <div className='d-lg-none'>
                <SideNav></SideNav>
            </div>
            <Link>Signup</Link>
            <Link>Signin</Link>
            <Link><Image className='w-25 mx-5' src={headerLogo} rounded></Image></Link>
          </Navbar.Collapse>
          
          
        </Container>
      </Navbar>
      
    );
};

export default Header;