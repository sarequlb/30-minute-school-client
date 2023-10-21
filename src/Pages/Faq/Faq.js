import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../SharedPages/Header/Header';
import Footer from '../../SharedPages/Footer/Footer';

const Faq = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center mt-5'>FAQ<small>s</small></h1>
            <Accordion className='w-50  mx-auto mt-5'>
                <Accordion.Item className='p-3' eventKey="0">
                    <Accordion.Header>How do these plans work?
                    </Accordion.Header>
                    <Accordion.Body>
                        A plan is a set of video-based workouts. It's 100% online, so you can watch the videos on Macs, PCs, iPhones, iPads, and Android: any device with an internet connection!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="1">
                    <Accordion.Header>How many times will I be charged?</Accordion.Header>
                    <Accordion.Body>
                        You will only be charged once. There's no monthly's fee.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="2">
                    <Accordion.Header>How long do I have access?</Accordion.Header>
                    <Accordion.Body>
                        You have lifetime access to the plan. As many times as you want to view it and use it, it is yours.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='p-3' eventKey="3">
                    <Accordion.Header>How does the refund policy work?</Accordion.Header>
                    <Accordion.Body>

                        If you're unhappy for any reason, email us within 15 days of purchasing on the web, and we will give you a full refund. No strings attached
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Footer></Footer>
        </div>

    );
};

export default Faq;