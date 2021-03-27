const router = require('express').Router();
const { validateCard, validateId } = require('../middlewares/validation');
const {
  getCards,
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getCards);

router.get('/cards/:_id', getCard);

router.post('/cards', validateCard, createCard);

router.delete('/cards/:_id', validateId, deleteCard);

router.put('/cards/:_id/likes', validateId, likeCard);

router.delete('/cards/:_id/likes', validateId, dislikeCard);

module.exports = router;
