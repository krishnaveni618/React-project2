import React, { useRef } from 'react'
import './Registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const username = useRef();
  const email = useRef();
  const password=useRef();
  const passwordAgain=useRef();

  
 
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
     e.preventDefault();
     if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("passwords don't match");
     }else{
        const user={
          username:username.current.value,
          email:email.current.value,
          password:password.current.value,

        };
        try{
          const res = await axios.post("http://localhost:8000/api/auther/register",user);
          console.log(res.data);
          navigate("/login");
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
                <form className='loginbox' onSubmit={handleSubmit} action='submit'>
                <input  placeholder='Username' className='loginInput' ref={username} required/>
                <input  placeholder='Email' className='loginInput' ref={email} required type='email'/>
                <input  placeholder='Password' className='loginInput' ref={password} required type='password'/>
                <input  placeholder='Password Again' className='loginInput' ref={passwordAgain} required type='password'/>
                <button className='loginButton' type='submit'>Sign Up</button>
                
                <button className='loginregistrationbutton' type='submit' onClick={handleSubmit}>Login into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
