require("dotenv/config");
// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = String(process.env.REACT_APP_REDIRECT_URI);
console.log("aqui", redirectUri);

const clientId = "5f0b9d6def104213886cd84a90861d8b";

// Scopes are permissions whilst using Spotify API :)
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  const hash = window.location.hash.substring(1).split("&");
  let hashParts = [];
  let parts;

  hash.forEach((v, k) => {
    parts = v.split("="); // key=>value
    hashParts[parts[0]] = parts[1];
  });

  return hashParts;
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
