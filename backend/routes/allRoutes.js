const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { NotFound } = require('../errors/allErrors');
const { validationCreateUser, validationLogin } = require('../utils/validationRequest');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер точно сейчас упадёт');
  }, 0);
});

router.post('/signin', validationLogin, login);

router.post('/signup', validationCreateUser, createUser);
router.use(auth);
router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

router.use('*', (req, res, next) => {
  next(new NotFound('Cтраницы не сушествует'));
});

module.exports = router;
