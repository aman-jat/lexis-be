const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.js');
const mw = require('../middleware');

router.post(
  '/register',
  mw.checkPayload({ name: 'string', email: 'string', password: 'string' }),
  auth.register
);

router.post(
  '/login',
  mw.checkPayload({ email: 'string', password: 'string' }),
  auth.login
);

router.put('/logout', mw.checkAuth, auth.logout);

module.exports = router;
