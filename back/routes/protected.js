const express = require('express');
const { verifyToken } = require('../utils/jwtUtils');
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Recurso protegido', user: req.user });
});

module.exports = router;