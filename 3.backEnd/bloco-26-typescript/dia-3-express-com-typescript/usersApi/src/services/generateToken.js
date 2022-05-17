const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/userJSON');

const secret = fs.readFileSync('jwt.key', { encoding: 'utf-8' }).trim();
const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };

const generateToken = async ({ email }) => {
  const user = await User.getByEmail(email);
  delete user.password;
  const token = jwt.sign(user, secret, jwtConfig);
  return { token };
};

module.exports = generateToken;
