import Ninja from "../assets/avatars/ninja.svg"
import Astronaut from "../assets/avatars/astronaut.svg"
import Anon from "../assets/avatars/anon.svg"

import { useState, useEffect, useContext } from "react";
import React from "react";



import '../../styles/styles.css'
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";




const Login = () => {

    const { user, setUser } = useContext(UsersContext)



    useEffect(() => {
        console.log(user);
    }, [user])





    const handleInput = (e) => {

        const value = e.target.value
        const name = e.target.name

        setUser(previous => ({
            ...previous, [name]: value
        }))

        console.log(user);


    }








    return (
        <div className="landing-page">
            <h1 className="header">Chat App</h1>
            <h2>First type your chat name and pick
                an avatar</h2>

            <h5>Choose one from existing avatars</h5>

            <input className="name" minLength={3} type="text" name="username" placeholder="Your chat name" value={user.username} onChange={(e) => handleInput(e)} />
            <div></div>
            <div className="avatars">
                <img src={Astronaut} alt="astronaut" />
                <img src={Ninja} alt="ninja" />
                <img src={Anon} alt="anon" />
            </div>

            <button type="submit" className="login-button">OK</button>
            <Link to="/chat">Chat</Link>




        </div>
    )


}

export default Login