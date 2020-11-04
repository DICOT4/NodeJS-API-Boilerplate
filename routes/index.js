const express = require('express');
const authenticateMiddleware = require('../middlewares/authenticate');
const indexController = require('../controllers/index');

const router = express.Router();

/* GET home page. */
router.get('/', authenticateMiddleware.printer, indexController.index);

module.exports = router;
