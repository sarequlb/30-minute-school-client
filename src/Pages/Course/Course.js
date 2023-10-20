import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Course = ({course}) => {
    const {img,title,coursePrice,id} = course;
    return (
         <Card className='shadow-lg border-0 mb-4' style={{ width: '18rem' }}>
            <Image className='h-75 rounded m-2' src={img}></Image>
         {/* <Card.Img className='h-75 p-2 rounded' variant="top" src={img} rounded/> */}
         <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>
             Course Price: {coursePrice}
           </Card.Text>
           <Link to={`/course/${id}`}><Button variant="primary">Course Details</Button></Link>
         </Card.Body>
       </Card>
    );
};

export default Course;