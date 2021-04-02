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

router.get('/', getCards);

router.get('/:_id', getCard);

router.post('/', validateCard, createCard);

router.delete('/:_id', validateId, deleteCard);

router.put('/:_id/likes', validateId, likeCard);

router.delete('/:_id/likes', validateId, dislikeCard);

module.exports = router;
