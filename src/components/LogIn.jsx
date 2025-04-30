import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase.init';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {

    const[errorMessage, setErrorMessage] =useState('')
    const[success, setSuccess] =useState(false);
    const [showPass, setShowPass] = useState(false);
    const emailRef =useRef();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('')
        setSuccess(false)


        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if(!result.user.emailVerified){
                alert("plz verify your email")
            }
            else{
                setSuccess(true)
            }
        })
        .catch(error=> {
            console.log(error);
            setErrorMessage(error.message)
        })

    }

    const handleForgetPass = () => {

        console.log(emailRef.current.value);

        const forgetEmail = emailRef.current.value;
        sendPasswordResetEmail(auth, forgetEmail)
        .then(()=>{
            alert('Your reset password email in send. plz check your email')
        })
        .catch(error=>{
            setErrorMessage(error.message)
        })


    }


    return (
    
          <div className="card bg-base-100 w-full mt-16 mx-auto max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-cyan-600 pt-2 text-center font-bold">Login now!</h1>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <div className='relative'>
                <input type={showPass ? "text" : "password"} name='password' className="input" placeholder="Password" />
                <button
              type="button"
              onClick={() => {
                setShowPass(!showPass);
              }}
              className="btn absolute top-1 right-6 btn-sm"
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
                </div>
                <div onClick={handleForgetPass} ><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p>Are you new in website? then <Link to='/signin' className='text-blue-600 underline'>sign In</Link></p>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
            }
            {
                success && <p className='text-green-500'> User successfully Log In</p>
            }
              </form>
            </div>
          </div>
       
    );
};

export default LogIn;