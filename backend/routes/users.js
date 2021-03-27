const router = require('express').Router();
const { validateId, validateUserUpdate, validateAvatar } = require('../middlewares/validation');
const {
  getUsers,
  getUser,
  createUser,
  getMe,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getMe);
router.get('/users/:_id', getUser);
router.post('/users', validateId, createUser);
router.patch('/users/me', validateUserUpdate, updateUser);
router.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
