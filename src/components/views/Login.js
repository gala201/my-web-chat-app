import Ninja from "../assets/avatars/ninja.svg"
import Astronaut from "../assets/avatars/astronaut.svg"
import Anon from "../assets/avatars/anon.svg"

import { useState, useEffect, useContext } from "react";
import React from "react";



import '../../styles/styles.css'
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";
import Avatar from "../data/avatars/Avatar";




const Login = ({ setLogin }) => {

    const { user, setUser } = useContext(UsersContext)

    const avatar1 = Astronaut
    const avatar2 = Ninja
    const avatar3 = Anon

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


    const handleImage = (id) => {

        setUser(previous => ({
            ...previous, avatar: id
        }))

    }

    const handleLogin = () => {
        if (user.username.length > 3 && user.avatar) {
            setLogin(true)
        }
    }



    return (
        <div className="landing-page">
            <h1 className="header">Chat App</h1>
            <h2>First type your chat name and pick
                an avatar</h2>

            <h5>Choose one from existing avatars</h5>

            <input className="name" minLength={3} type="text" name="username" placeholder="Your chat name" value={user.username} onChange={(e) => handleInput(e)} />

            <div className="avatars">


                <img src={Astronaut} alt="Astronaut" onClick={() => handleImage(avatar1)} />

                <img src={Ninja} alt="Ninja" onClick={() => handleImage(avatar2)} />
                <img src={Anon} alt="Anon" onClick={() => handleImage(avatar3)} />
            </div>


            <Link to="/chat">
                <button type="submit" className="login-button" onClick={handleLogin} disabled={user.username.length < 3 ? true : false}>OK</button>
            </Link>




        </div>
    )


}

export default Login