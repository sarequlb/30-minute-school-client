import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { createUser,emailVerify,updateProfileUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [accepted, setAccepted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photourl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please provide at least ONE uppercase')
            return;
        }
        if (password.length < 6) {
            setError('please should be 6 characters')
            return;
        }
        if (password !== confirmPassword) {
            setError('passWord didnot match')
            return;
        }

        if (!/(?=.*[!#$%&? "])/.test(password)) {
            setError('please add at least 1 special characters')
            return;
        }
        setError('')
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                handleUpdate(name,photoUrl)
                handleEmailVerification()
                toast.success('please verify your email')
                console.log(user)
                setSuccess(true)
                form.reset('')
            })
            .catch(error =>{
                setError(error.message)
            })

            
    }

    const handleUpdate = (name,photoUrl) =>{
        const profile = {
            displayName: name,
            photoURL:photoUrl
        }
        updateProfileUser(profile)
        .then(() =>{})
        .catch(error =>console.error(error))
    }

    const handleEmailVerification = () =>{
        emailVerify()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    const handleAccepted =(event) =>{
        setAccepted(event.target.checked)
    }
    return (
        <div className='w-75 mx-auto bg-secondary-subtle p-5 mt-5 rounded'>
            <h4 className='text-center'>Sign Up</h4>
            <p className='text-center'>Already have an account? <Link className='text-decoration-none' to={'/signin'}>Sign In</Link></p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" required name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photourl" type="text" placeholder="photo url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="text" placeholder="Confirm Password" name='confirmPassword' required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                {success && <p className='text-success'>user created succesfully</p>}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>
                        Accept <Link className='text-decoration-none' to={'/terms'}>Terms & Condition</Link>
                    </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled = {!accepted}>
                    SignUp
                </Button>
            </Form>
        </div>
    );
};

export default Signup;