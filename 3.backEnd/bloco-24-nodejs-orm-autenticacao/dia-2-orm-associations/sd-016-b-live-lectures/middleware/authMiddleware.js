const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const authMiddleware = (req, res, next) => {
  const { authorization: token } = req.headers;

  if(!token)
    return res.status(404).json({ message: 'Token is missing!'})

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);

    req.user = decoded;

    next();
  } catch(err) {
    return res.status(401).json({ message: 'Not Authorized!!!'})
  }

  // if (user.token !== token) {
  //   return res.status(401).json({ message: 'Not Authorized!!!'})
  // }

  // req.user = user;

  // next();
}

module.exports = authMiddleware;