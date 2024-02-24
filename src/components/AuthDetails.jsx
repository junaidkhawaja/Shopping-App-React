import React from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth, app } from '../firebaseConfig';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const AuthDetails = () => {
    const [authuser, setAuthUser] = useState(null);
    useEffect(()=> {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user)
        }
        else {
            setAuthUser(null)
        }
      })
    }, []);
//    const [isConnected, setIsConnected] = useState(true)
    const logOut = () => {
        signOut(auth).then(() => {
           window.location = '/SignIn'
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
      };
      const navigate = useNavigate();
      const google_logout = () => {
        signOut(auth).then(() => {
            navigate('/SignIn');
             // Sign-out successful.
           }).catch((error) => {
             // An error happened.
           });
      }

    return (
    <div> {authuser ? <div><p>{`Signed In As ${authuser.email}`}</p> <Button onClick={logOut}>Logout</Button></div> : <p>Welcome Again, <Link style={{color:'blue', textDecoration:"underline"}} to="/SignIn">Sign In</Link></p>} 
        {authuser ? <p>.</p> : <div className='main-page'>
        <Link to="/SignIn">
            <img style={{width:"100%"}} src="https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png" />
        </Link>
        </div>
        }

    </div>
        )
}

export default AuthDetails
