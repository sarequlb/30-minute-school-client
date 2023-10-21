import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [loader,setLoader] = useState(true)
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        setLoader(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignin = (provider) =>{
       return signInWithPopup(auth,provider)
    }
    const githubSignin = (provider) =>{
       return signInWithPopup(auth,provider)
    }

    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const emailVerify = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() =>{
        const unsubscibe = onAuthStateChanged(auth,(currentUser) =>{
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoader(false)
        })
        return () =>{
            unsubscibe()
        }
    },[])
    
    const authInfo = {
        createUser,
        loginUser,
        passwordReset,
        user,
        logOut,
        emailVerify,
        updateProfileUser,
        loader,
        googleSignin,
        githubSignin
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;