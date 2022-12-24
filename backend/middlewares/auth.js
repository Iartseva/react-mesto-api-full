const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/allErrors');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  /* if (!req.cookies.jwt) {
    next(new UnauthorizedError('Вы не авторизованы'));
  } else {
    const token = req.cookies.jwt;
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
      req.user = payload;
      next();
    } catch (err) {
      next(new UnauthorizedError('Вы не авторизованы'));
    }
  } */
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError('Вы не авторизованы'));
  }
  req.user = payload;
  return next();
};
