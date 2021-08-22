import React from "react";
import spotifyLogo from "./img/spotify-logo.png";
import "./Login.css";

import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="Spotify Logo" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
