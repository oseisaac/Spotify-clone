import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
import Player from './components/Player.js'
import spotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new spotifyWebApi();

function App() {
  // const [token, setToken] = useState();
  const [{ user, playlists, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        });

      });

      spotify.getUserPlaylists().then((playlists) => {

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })

      });
    }

  }, []);
  // console.log(user);
  // console.log(playlists);


  return (
    <div className="App" >
      {token ? (

        <Player spotify={spotify} />
      ) :
        <Login />
      }
    </div >
  );
}

export default App;
