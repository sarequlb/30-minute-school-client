import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headerLogo from '../../images/header-logo.png'
import { Link, NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Header = () => {
  const { user, logOut, googleSignin } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
  }

 
  return (
    <Navbar expand="lg" className="bg-secondary-subtle w-100">
      <Container>
        <div className='d-flex'>
          <Navbar.Brand>
            <Image className='w-25' src={headerLogo} ></Image>
          </Navbar.Brand>
          <Navbar.Toggle className='' aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='text-decoration-none text-black mx-4' to={'/courses'}>Courses</NavLink>
            <NavLink className='text-decoration-none text-black mx-4' to={'/faq'}>FAQ</NavLink>
            <NavLink className='text-decoration-none text-black mx-4' to={'/blog'}>Blog</NavLink>
          </Nav>
          <div className='d-lg-none'>
            <SideNav></SideNav>
          </div>
          <div className='d-flex gap-4'>
            
             
            {
              user?.emailVerified ?
            <>
               {
                    user.photoURL?<Link to={'/profile'}><Image style={{height: '40px'}} src={user?.photoURL} roundedCircle></Image></Link>:<FaUser style={{height: '40px'}}></FaUser>
                  }
                   <Button onClick={handleSignOut} className='bg-danger'><Link className='text-decoration-none text-white'><FaSignOutAlt></FaSignOutAlt></Link></Button>
            </>
                 
                :
            <>
              <Button className='bg-danger'><Link to={'/signup'} className='text-decoration-none text-white'>Signup</Link></Button>
              <Button className='bg-black'><Link to={'signin'} className='text-decoration-none text-white'>Signin</Link></Button>
            </>
            }

          </div>
        </Navbar.Collapse>

        {/* {
              user?.photoURL? <Link><Image style={{height: '40px'}} className=' mx-5' src={user.photoURL} roundedCircle></Image></Link> : <FaUser></FaUser>
          } */}
      </Container>
    </Navbar>

  );
};

export default Header;