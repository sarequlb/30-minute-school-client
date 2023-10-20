import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googlePng from '../../images/Google-Symbol-removebg-preview.png'
import githubPng from '../../images/GitHub_logo.png'
import './Signin.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Signin = () => {
    const [error, setError] = useState(null)
    const {loginUser,passwordReset,googleSignin,githubSignin} = useContext(AuthContext)
    const [userEmail,setUserEmail] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then((result) =>{
            const user = result.user;
            if(user.emailVerified){
                navigate(from, {replace:true})
            }
            else{
                toast.error('your email is not verify.please verify your email')
                
            }
            console.log(user)
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    const handleGoogle = () =>{
        const googleProvider = new GoogleAuthProvider;
        googleSignin(googleProvider)
        .then((result) =>{
            const user = result.user;
            if(user.emailVerified){
                navigate(from, {replace:true})
            }
            else{
                toast.error('your email is not verify.please verify your email')
                
            }
            console.log(user)
        })
        .catch(error =>{
          console.log(error)
        })
      }
      const handleGithub = () =>{
        const githubProvider = new GithubAuthProvider;
        githubSignin(githubProvider)
        .then((result) =>{
            const user = result.user;
            if(user.emailVerified){
                navigate(from, {replace:true})
            }
            else{
                toast.error('your email is not verify.please verify your email')
                
            }
            console.log(user)
        })
        .catch(error =>{
          console.log(error)
        })
      }

    const handleResetEmail =() =>{
        if(!userEmail){
            alert('please Enter your email')
        }
        passwordReset(userEmail)
        .then(() =>{
            alert('password reset email sent.please check your email')
        })
        .catch((error) =>{
            setError(error.message)
        })
    }
    const handleEmailBlur = (event) =>{
        const email = event.target.value;
        setUserEmail(email)
    }
    return (
        <div className='w-75 mx-auto bg-secondary-subtle p-5 mt-5 rounded'>
            <h4 className='text-center'>Sign In</h4>
            <p className='text-center'>Don't have an account? <Link className='text-decoration-none' to={'/signup'}>Sign Up</Link></p>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <p>{error}</p>
                <Form.Text>
                    <Button onClick={handleResetEmail} variant='link'><Link>Forget your password</Link></Button>
                </Form.Text> <br></br>
                <Button className='mt-3' variant="primary" type="submit">
                    Sign In
                </Button>
                <div className='mx-auto mt-3'>
                    <p>or login with</p>
                    
                    <Button onClick={handleGoogle} className='px-5 fw-bold mb-3' variant="primary"><img className='img-google' src={googlePng}></img><span className='mx-3'>Google</span></Button>
                    <Button onClick={handleGithub} className='fw-bold' variant="danger"><img className='img-github' src={githubPng}></img><span className='mx-3'>Github</span></Button>

                    
                </div>

            </Form>
        </div>
    );
};

export default Signin;