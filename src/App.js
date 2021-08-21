import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }

    console.log("I have a token >> ", token);
  }, []);

  useEffect(() => {
    if (token !== null) {
      console.log("here", token);

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists });
      });

      spotify.getPlaylist("37i9dQZEVXcI9HScciO6fc").then((response) => {
        let x = 1;
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [token]);

  return (
    <div className="app">
      {/* <h1>Hello Clever Programmers We are building a Spotify Clone!!</h1> */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
