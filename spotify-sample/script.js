// replace the below with your spotify client id, NOT YOUR SECRET
const SPOTIFY_CLIENT_ID = "INPUT YOUR SPOTIFY CLIENT ID HERE";

// Where to configure your redirect URI. If you're using
// the live-server vscode extension, it's probably going to be this:
const REDIRECT_CALLBACK_URI = "http://localhost:5500/";

// This is the list of permissions you need
const SPOTIFY_API_SCOPE = "user-read-private user-read-email";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

// function that gets called when the page loads
async function load() {
  if (!code) {
    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID);
  } else {
    const accessToken = await getAccessToken(SPOTIFY_CLIENT_ID, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
  }
}
async function fetchProfile(code) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${code}` },
  });

  return await result.json();
}

function populateUI(profile) {
  console.log(profile);
  //   Do the rest of your app
}

// SPOTIFY AUTH CODE
async function redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", SPOTIFY_CLIENT_ID);
  params.append("response_type", "code");
  params.append("redirect_uri", REDIRECT_CALLBACK_URI);
  params.append("scope", SPOTIFY_API_SCOPE);
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getAccessToken(SPOTIFY_CLIENT_ID, code) {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", SPOTIFY_CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", REDIRECT_CALLBACK_URI);
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}

function generateCodeVerifier(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
