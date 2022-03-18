const express = require("express");
const router = express.router();

const {isValidUsername,  isValidEmail, isValidPassword } = require('./validation');

router.post('/register', isValidUsername, isValidEmail, isValidPassword, function (_req, res) {
    return res.status(201).json({ message: 'user created successfully!'});
  });
  
router.post('./login', isValidUsername, isValidEmail, isValidPassword,function(req, res) {
    return res.status(200).json({ token: '86567349784e' });
})

module.exports = router;