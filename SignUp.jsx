// import React from 'react';
import './App.css'
import axios from 'axios'

import { useNavigate ,Link } from 'react-router-dom'
import { useState } from 'react';
import Footer from './Footer';

export default function SignUp() {
   
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  
  const navigate=useNavigate();

  const handleSubmit=(e)=>{

  e.preventDefault();

    axios.post('http://localhost:3000/signup',{name,email,password})
    .then(result=>{console.log(result)
    navigate('/Login')
      })

     .catch(err=>console.log(err))
    

    }
    
    return (
        
        <div className="relative flex flex-col justify-center bg-primary min-h-screen">
          
            <div className=" w-1/4  p-6 m-auto mt-32 bg-primary rounded-md lg:max-w-xl shadow-custom">
                <h1 className="text-3xl mt-6 font-semibold text-center text-secondary  ">
                   Sign Up
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2 mt-6">
                        <label
                            // for="email"
                            className="block text-md font-semibold text-secondary"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username '
                            className="block w-full px-4 py-2 mt-6 text-secondary  bg-primary rounded-md border-secondary border-b-2 outline-none "
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            // for="email"
                            className="block text-md font-semibold text-secondary"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder='Enter your email '
                            className="block w-full px-4 py-2 mt-6 text-secondary  bg-primary rounded-md border-secondary border-b-2 outline-none "
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 ">
                        <label
                            // for="password"
                            className="block text-md font-semibold text-secondary mt-6 "
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder='Set password '
                            className=" block w-full px-4 py-2 mt-6 text-secondary  bg-primary rounded-md border-secondary border-b-2 outline-none "
                            onChange={(e)=>setPassword(e.target.value)}
                       />
                    </div>
                   
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 mt-4 tracking-wide text-primary transition-colors duration-200 transform bg-secondary rounded-3xl">
                            Sign Up
                        </button>
                    </div>
                </form>
                 <p className='mt-4 ml-48 text-secondary'>Or</p>
                <p className="mt-2 text-md font-light text-center text-secondary">
                    {" "}
                    Already have an account?{" "}
                    <Link to="/login"
                        
                        className="font-medium text-secondary hover:underline"
                    >
                        Sign in
                    
                    </Link>
                </p>
            </div>
            <Footer></Footer>
        
       
        </div>
    );
}
