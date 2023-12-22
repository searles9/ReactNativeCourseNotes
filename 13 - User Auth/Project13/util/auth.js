import axios from "axios";

const WEB_API_KEY = "AIzaSyBbUAo9_8y0frv4LyXaqlO8rwU-cryI7CI";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${WEB_API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log(response.data.email)
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
