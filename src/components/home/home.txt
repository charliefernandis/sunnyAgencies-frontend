import React from "react";
import "./home.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import homePagePhoneImage from "./img2.png";
import Typist from 'react-typist';
import { useState ,useEffect } from "react";
import { NavLink , useNavigate } from "react-router-dom";


function Home(props) {
    const quotes = ["Don't let the price fool you - our cheap rates offer premium quality.","Rates soo good , that they cure a part of your customer's sickness" ,"Get healthy without going broke ","Medicines accessible to all!","Bringing hopes to people's lives"]
    const [count , setCount] = useState(0);

    const quoteFunction = ()=>{
        if(count<quotes.length){
            setCount(count+1);
        }
        else{
            setCount(0);
        }
    }

    return <div className="homeContainer">
        <header className="homePageHeader">
            <nav className="navBar">
                <div className="left">
                    <h2>Sunny Agencies</h2>
                </div>
                <div className="right">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </nav>
        </header>
        <div className="homePageBody">
            <div className="leftBody">
                <h1><Typist onTypingDone={() => setTimeout(quoteFunction, 8000)} avgTypingDelay={30}  key={count} >
                    {quotes[count]}    
                </Typist></h1>       
                <h2><p>Click Here to Continue, </p> <NavLink to="/login"><button className="btn " >Login</button></NavLink> </h2>
            </div>
            <div className="rightBody">
                <div className="homePagePhone">
                    <img src={homePagePhoneImage}></img>
                </div>
            </div>
        </div>
    </div>
}

export default Home;
