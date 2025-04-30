import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signin = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const trams =e.target.trams.checked;
    console.log(email, password, trams, name, photo);

    

    setSuccess(false);
    setErrorMessage("");
    if(!trams){
        setErrorMessage('plz accept our trams and condition')
        return;
    }

    // password valid
    const passwordEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (passwordEx.test(password) === false) {
      setErrorMessage(
        "Must be more than 8 characters, including number, lowercase letter, uppercase letter"
      );
      return;
    }

   
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        sendEmailVerification(auth.currentUser)
        .then(()=> {
            setSuccess(true);
            alert('We will send verification Email. plz verify your email')
        })
        const profile ={
            displayName : name,
            photoURL : photo,
        }
        updateProfile(auth.currentUser, profile)
        .then(()=>{

        })
        .catch(error=>{
            setErrorMessage(error.message)
        })
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mt-16 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-thin">SignIn now!</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="label">Email</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
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
          <label className="label mt-2">
            <input type="checkbox" name="trams" className="checkbox" />
            Accept Our Trams and Conditions
          </label>
          <br />

          <button className="btn btn-neutral mt-4">Login</button>
          <p>Do you already have account then. plz <Link to='/login' className="text-blue-700 underline">Log In</Link></p>
          {success && <p className="text-green-700">User added successfully</p>}
          {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signin;
