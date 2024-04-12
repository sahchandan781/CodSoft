import React from 'react'
import {GoogleAuthProvider , getAuth, signInWithPopup} from "firebase/auth";
import app from "../Firebase/firebase.config"


const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) =>{
      const user = result.user;

    }).catch((error) => {
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='py-2 px-5 border rounded bg-blue text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login