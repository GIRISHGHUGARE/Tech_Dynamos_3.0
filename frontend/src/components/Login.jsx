import React from 'react'
import "./Login.css"
import login from '../../assets/section/login.jpg' 


const Login = () => {
  return (
    <div className='login'>
        <div className="loginForm">
            <div className="header">
                <span className='title'>Login / Signup</span>
                <span className="desc">Now you can login get access to
                <br/><span>community and chats</span> 
                </span>
            </div>
            <div className="form">
                <span className='label'>Login</span>
                <div className="email">
                    <label>Enter your Email : </label>
                    <input type='text'></input>
                </div>
                <div className="password">
                <label>Enter your Password : </label>
                <input type='text'></input>
                </div>
                <div className="button">
                    <a href="">Submit</a>
                </div>
            </div>
        </div>
        <div className="formImg">
            <img src={login}/>
        </div>
    </div>
  )
}

export default Login
