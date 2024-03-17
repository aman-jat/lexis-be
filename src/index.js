require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const movieRouter = require('./routes/movie');

const app = express();

app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf.toString();
    },
  })
);

app.use(express.json());

app.use(function (err, _, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send({ code: 400, message: 'Invalid JSON in request' });
  } else next();
});

app.use('/api/auth', authRouter);
app.use('/api/movie', movieRouter);

app.listen(process.env.PORT, () =>
  console.log(`App listening at http://localhost:${process.env.PORT}`)
);
