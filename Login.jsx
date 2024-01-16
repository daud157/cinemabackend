// import React from 'react';
import './App.css'
import axios from 'axios'
import {useContext, useState,useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom';
import { MovieListContext } from './App';
import Footer from './Footer';
// import MovieList from './MovieList';
export default function Login() {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const {loggedIn,setLoggedIn}=useContext(MovieListContext);
  const {activeUser,setActiveUser}=useContext(MovieListContext);
 

  const Navigate=useNavigate();
  useEffect(() => {
    console.log('loggedIn changed:', loggedIn);
  }, [loggedIn]);

  const handleSubmit=(e)=>{

  e.preventDefault();
  
  axios.post('http://localhost:3000/login', { email, password })
    .then(result => {
      console.log(result);
    //  const status = result.data;
    //   console.log(result.data.user);
     

      if (result.data.status === "success") {
        setLoggedIn(true);
        console.log(loggedIn);
        setActiveUser(result.data.user)
        // console.log(user);
        Navigate('/MoviesList');
      } else if (result.data.message=== "password is incorrect") {
        window.alert("Password is incorrect");
        setLoggedIn(false);

        console.log(loggedIn)
      } else if (result.data.message=== "no user found") {
        window.alert("No User Found");
        setLoggedIn(false);
      }
    })
    .catch(err => {
      console.log(err);
      setLoggedIn(false);
    });


      
  }
 
    return (
        <div className=" relative flex flex-col justify-center min-h-screen  bg-primary ">
            <div className="w-1/4 p-6 h-3/5  bg-primary rounded-md m-auto mt-32 shadow-custom">
                <h1 className="text-3xl font-semibold text-center text-secondary mt-8  ">
                   Sign in
                </h1>
                <form className="mt-6 " onSubmit={handleSubmit}>
                
                    <div className="mb-4 mt-12">
                        <label
                            // for="email"
                            className="block text-md font-semibold text-secondary"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email here'
                            className="block w-full px-4 py-2 mt-6 text-secondary  bg-primary rounded-md border-secondary border-b-2 outline-none "
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 mt-12">
                        <label
                            // for="password"
                            className="block text-md font-semibold text-secondary"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password '
                            className="block w-full px-4 py-2 mt-6 text-secondary  bg-primary rounded-md border-secondary border-b-2 outline-none "
                            onChange={(e)=>setPassword(e.target.value)}
                       />
                    </div>
                   
                    <div className="mt-6">
                        <button  className="w-full px-4 py-2 rounded-3xl  mt-6 tracking-wide text-white transition-colors duration-200 transform  bg-secondary">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className='mt-4 ml-48'>Or</p>
                <p className="mt-4 text-32 font-light text-center text-secondary ">
                    {" "}
                    Create an account?{" "}
                    <Link to="/signup"
                        
                        className="font-medium text-secondary hover:underline"
                    >
                        Sign up
                    
                    </Link>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
}
