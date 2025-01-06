const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });