const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

const getCards = (req, res, next) => Card.find({}).sort({ _id: -1 })
  .populate('user')
  .then((cards) => {
    if (!cards) {
      throw new NotFoundError({ message: 'Карточки не найдены' });
    }
    res.status(200).send(cards);
  })
  .catch(next);

const getCard = (req, res, next) => Card.findById(req.params._id)
  .then((card) => {
    if (!card) {
      throw new NotFoundError({ message: 'Карточки не найдены' });
    }
    res.status(200).send(card);
  })
  .catch(next);

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  return Card.create({ name, link, owner: _id })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err instanceof NotFoundError) {
        next(new BadRequestError({ message: 'Данные введены не корректно' }));
      } else {
        next(err);
      }
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params._id)
    .orFail(new NotFoundError({ message: 'Карточка не найдена' }))
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenError({
          message: 'Удалять можно только свои карточки',
        });
      } else {
        Card.findByIdAndDelete(req.params._id)
          .then(() => res.status(200).send({ message: 'Карточка удалена' }))
          .catch(next);
      }
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NotFoundError({ message: 'Карточка не найдена' }))
    .then((card) => res.send(card))

    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NotFoundError({ message: 'Карточка не найдена' }))
    .then((card) => res.send(card))
    .catch(next);
};

module.exports = {
  getCards,
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
