import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../SharedPages/Header/Header';
import Footer from '../../SharedPages/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center mt-5'>Blog<small>s</small></h1>
            <Accordion className='w-50  mx-auto mt-5'>
                <Accordion.Item className='p-3' eventKey="0">
                    <Accordion.Header> what is cors?
                    </Accordion.Header>
                    <Accordion.Body>
                    Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. This is useful because complex applications often reference third-party APIs and resources in their client-side code. For example, your application may use your browser to pull videos from a video platform API, use fonts from a public font library, or display weather data from a national weather database. CORS allows the client browser to check with the third-party servers if the request is authorized before any data transfers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                    PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>

                    Node.js is an open source server environment.It can handle concurrent requests with a single thread without blocking it for one request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Blog;