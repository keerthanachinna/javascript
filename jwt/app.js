const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key_here';

// Middleware to validate JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

// Route to generate a JWT token
app.post('/login', (req, res) => {
  // Replace 'your_username' and 'your_password' with actual user credentials
  const username = 'your_username';
  const password = 'your_password';

  if (req.body.username === username && req.body.password === password) {
    const payload = { username: req.body.username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return res.json({ token });
  }

  return res.status(401).json({ message: 'Unauthorized: Invalid credentials' });
});

// Protected route - requires a valid JWT token
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route: Hello, ' + req.user.username });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
