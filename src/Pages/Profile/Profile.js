import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../SharedPages/Header/Header';

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Header></Header>
            <div className='mx-auto w-50'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Your Name</Form.Label>
                        <Form.Control  defaultValue={user?.displayName} type="text" readOnly name='name' placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control defaultValue={user?.photoURL} type="text" placeholder="photourl" readOnly />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Profile;