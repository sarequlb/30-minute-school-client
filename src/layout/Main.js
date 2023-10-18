import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPages/Header/Header';
import Footer from '../SharedPages/Footer/Footer';
import SideNav from '../SharedPages/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;