import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";

const Signin = () => {

        const [success, setSuccess] =useState(false);
        const [errorMessage, setErrorMessage] = useState('')

       

    const handleSubmit = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess(false)
        setErrorMessage('')

         // password valid
         const passwordEx =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
         if(passwordEx.test(password) === false){
             setErrorMessage('Must be more than 8 characters, including number, lowercase letter, uppercase letter')
             return;
         }
  

        createUserWithEmailAndPassword(auth, email, password)
        .then(result=> {
            console.log(result);
            setSuccess(true)
        })
        .catch(error =>{
            console.log(error);
           
        })



    }
 
 
    return (
 
        <div className="card bg-base-100 mt-16 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center font-thin">SignIn now!</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              {
                success && <p className="text-green-700">User added successfully</p>
              }
              {
                errorMessage && <p className="text-red-700">{errorMessage}</p>
              }
            </form>
          </div>
        </div>
 
  );
};

export default Signin;
