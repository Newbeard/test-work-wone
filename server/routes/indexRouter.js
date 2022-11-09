const router = require('express').Router();

const authorizationRouter = require('./authorizationRouter');

const headersRouter = require('./headersRouter');

// Маршрутизация
router.use('/authorization', authorizationRouter);

router.use('/headers', headersRouter);

module.exports = router;
