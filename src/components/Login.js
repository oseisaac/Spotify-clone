import React from 'react';
import './Login.css';
import { loginUrl } from '../spotify.js'

const login = () => {
    return (
        <div className="login">
            <img src={require('../assets/Spotify_Logo.png')} alt="" />
            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>

        </div>
    );
}

export default login;
