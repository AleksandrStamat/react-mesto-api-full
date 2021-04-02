const router = require('express').Router();
const { validateId, validateUserUpdate, validateAvatar,validateUser } = require('../middlewares/validation');
const {
  getUsers,
  getUser,
  createUser,
  getMe,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getMe);
router.get('/:_id', validateId, getUser);
router.post('/', validateUser, createUser);
router.patch('/me', validateUserUpdate, updateUser);
router.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
