import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    const { img, title, coursePrice, rating, id, courseDetails, mentorName, education } = details;
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Here Is The <span className='text-danger'>Course Details </span>Of {title}</h2>
            {/* <div className='d-flex gap-0'>
                <div className='d-flex mx-2'>
                    <img className='w-50' src={img}></img>
                    <div>
                    <h1>{title}</h1>
                    </div>
                    
                </div>
            </div> */}
            <Card className='mx-4  mt-5 shadow-lg border-0 mb-4 rounded' style={{ width: '25rem' }}>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Course Price: {coursePrice} taka
                    </Card.Text>
                    <Card.Text>
                        {courseDetails.details1}
                    </Card.Text>
                    <Card.Text>
                        {courseDetails.details2}
                    </Card.Text>
                    <Card.Text>
                        {courseDetails.details3}
                    </Card.Text>
                    <Card.Text>
                        {courseDetails.details4}
                    </Card.Text>
                    <p>Instructor: {mentorName} <p>({education})</p></p>
                    <p>Rating: {rating}</p>
                   <Link to={'/purchased'}> <Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;