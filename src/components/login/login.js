import React, { useState } from "react";
import "./login.css"
import Divider from '@mui/material/Divider';
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate("")  
  const [email,setEmail] = useState("");
  const [password , setPassword] = useState("");   

  const submitForm = async(e)=>{
    e.preventDefault();
    const res = await fetch("mr/login" , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email , password})
    })
    const data = await res.json();
    if(res.status ===201){
      navigate("/mr/details/"+(data["company"].replace(" ","-"))+"/"+(data["_id"].replace(" ","-")))
    }
    setTimeout(() => {
      
    setEmail("");
    setPassword("");
    }, 2000);
  }

  return <div className="main-loginBody">
    <div className="login-body">
    <div className="registration-form">
      <h2>Login Form</h2>
      <form method="POST" onSubmit={submitForm}>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} className="email" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <label htmlFor="password">Password:</label>
        <input  id="password" type="password" value={password}  name="password" className="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <Divider variant="middle" ><NavLink to="/">Forgot Password?</NavLink></Divider>
        <button type="submit">Submit</button>
        <Divider variant="middle" >New to this website?</Divider>
        <p>Click here to Contact our team!</p>
      </form>
    </div>
  </div>
  </div>

}

export default Login;



