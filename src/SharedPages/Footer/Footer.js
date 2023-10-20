import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaLocationArrow, FaFacebook, FaInstagram, FaMailBulk, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5'>

            <footer class="text-center text-lg-start bg-light text-muted pt-4">

            
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    30 Minute School
                                </h6>
                                <p>
                                Experience education to a whole new level and bring out the best in you with the 30 Minute School
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Connect With us
                                </h6>
                                <div className='d-lg-flex gap-2'>
                                    <p>
                                        <Link className='text-decoration-none text-black'><FaFacebook></FaFacebook></Link>
                                    </p>
                                    <p>
                                        <Link className='text-decoration-none text-black'><FaInstagram></FaInstagram></Link>
                                    </p>
                                    <p>
                                        <Link className='text-decoration-none text-black'><FaYoutube></FaYoutube></Link>
                                    </p>
                                    <p>
                                        <Link className='text-decoration-none text-black'><FaTwitter></FaTwitter></Link>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><FaLocationArrow className='mx-2'></FaLocationArrow>Barmi Bazar,Sreepur,Gazipur</p>
                                <p>
                                    <FaMailBulk className='mx-2'></FaMailBulk>
                                    kazisiam248@gmail.com
                                </p>
                                <p>
                                    <FaPhoneAlt className='mx-2'></FaPhoneAlt>01317373763
                                </p>
                                <p> <FaPhoneAlt className='mx-2'></FaPhoneAlt>01537417341</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-4">
                    © 2021 Copyright:
                    <Link className='text-decoration-none text-black'>30 Minute School</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;