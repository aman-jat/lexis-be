const express = require('express');
const router = express.Router();
const movie = require('../controllers/movie.js');
const mw = require('../middleware');

router.get('/', mw.checkAuth, movie.getAll);
router.get('/search', mw.checkAuth, movie.search);

module.exports = router;
