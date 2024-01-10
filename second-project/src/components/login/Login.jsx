import React, { useRef } from 'react'
import './Login.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

  const emailref=useRef();
  const passref=useRef();
  
  const navigate = useNavigate();
  const  submitHandler =async (e) =>{
     e.preventDefault();
     if(passref.length < 6){
      passref.current.setCustomValidity("password length must be 6 characters");
     }else{
        const user={
          email:emailref.current.value,
          password:passref.current.value,

        };
        try{
          const res = await axios.post("http://localhost:8000/api/auther/login",user);
          console.log(res.data);
          navigate("/");
        }catch(err){
            console.log(err);
        }
     }
    
  }
  

  return (
    <div className='loginconatiner'>
        <div className='loginwrapper'>
            <div className='loginleft'>
                <h3 className='loginlogo'>Lamasocial</h3>
                <span className='logindesc'>Connect with friends and the worls around you on Lamasocial</span>
            </div>
            <div className='loginright'>
                <form className='loginbox' onSubmit={submitHandler}>
                <input type='email' placeholder='Email' className='loginInput' ref={emailref} required/>
                <input type='password' placeholder='Password' required minLength="6" className='loginInput' ref={passref}/>
                <button className='loginButton' type='submit'>Login</button>
                <span className='logingorget'>Forget Password</span>
                <button className='loginregistrationbutton' type='submit'>
                Create a New Account
                  </button>
                </form>
            </div>
        </div>
    </div>
  )
}

