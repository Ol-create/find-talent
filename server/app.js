require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

// Enable CORS for requests from https://find-talent.onrender.com
app.use(cors({
    origin: 'https://find-talent.onrender.com',
    credentials: true, // Allow cookies and credentials
  }));

// Google OAuth Client Setup
const client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: 'https://find-talent.onrender.com/auth/google/callback',
});

// Middleware
app.use(cookieParser());
app.use(express.json());

// Route to Initiate Google OAuth
app.get('/auth/google', (req, res) => {
  const authorizeUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
  });
  res.redirect(authorizeUrl);
});

// Callback Route to Handle Google OAuth Response
app.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('No code provided');
  }

  try {
    // Exchange authorization code for tokens
    const { tokens } = await client.getToken(code);

    // Verify the ID token to retrieve user info
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const user = {
      id: payload.sub,
      displayName: payload.name,
      email: payload.email,
      photo: payload.picture,
    };

    // Store user info or token in cookies
    res.cookie('user', JSON.stringify(user), { httpOnly: true });

    // Redirect to frontend with user data
    const userData = encodeURIComponent(JSON.stringify(user));
    res.redirect(`https://find-talent.onrender.com/user?user=${userData}`);
  } catch (err) {
    console.error('Error during Google OAuth', err);
    res.status(500).send('Authentication failed');
  }
});

app.get('/logout', (req, res) => {
    req.logout(err => {
      if (err) {
        console.error('Logout error:', err);
        return res.status(500).send('Failed to logout');
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.redirect('/login'); // Redirect to the login page
    });
  });

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
