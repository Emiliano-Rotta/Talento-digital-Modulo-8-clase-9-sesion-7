const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey'; //podria ir en una variable de entorno

const login = (req, res) => {
    const { username, password } = req.body;
  
    // Validación ficticia de credenciales
    if (username === 'admin' && password === '1234') {
      const token = jwt.sign(
        {
          sub: 1,
          role: 'admin',
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 3600,
        },
        SECRET_KEY,
        { algorithm: 'HS256' }
      );
      return res.json({ token });
    }
  
    return res.status(401).json({ message: 'Credenciales inválidas' });
  };
  
  module.exports = { login };