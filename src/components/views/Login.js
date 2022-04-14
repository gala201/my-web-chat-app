import Ninja from "../assets/avatars/ninja.svg"
import Astronaut from "../assets/avatars/astronaut.svg"
import Anon from "../assets/avatars/anon.svg"
import { useState, useEffect, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";

const Login = ({ setLogin }) => {
    const { user, setUser } = useContext(UsersContext)
    const avatar1 = Astronaut
    const avatar2 = Ninja
    const avatar3 = Anon
    const [avatarBorder, setAvatarBorder] = useState(0)

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

        if (id === avatar1) {
            setAvatarBorder(1)
        } else if (id === avatar2) {
            setAvatarBorder(2)
        } else {
            setAvatarBorder(3)
        }
        console.log(avatarBorder);
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
                <img src={Astronaut} alt="Astronaut" style={{ border: avatarBorder === 1 && "2px solid black" }} onClick={() => handleImage(avatar1)} />
                <img src={Ninja} alt="Ninja" style={{ border: avatarBorder === 2 && "2px solid black" }} onClick={() => handleImage(avatar2)} />
                <img src={Anon} alt="Anon" style={{ border: avatarBorder === 3 && "2px solid black" }} onClick={() => handleImage(avatar3)} />
            </div>
            <input type="color" name="bgColor" id="" onChange={(e) => handleInput(e)} />
            <div className="router-link">
                <Link to="/chat">
                    <button type="submit" className="login-button" onClick={handleLogin} disabled={(user.username.length > 3 && user.avatar) ? false : true}>OK</button>
                </Link>
            </div>
        </div>
    )
}

export default Login