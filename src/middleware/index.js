const db = require('../db');
const jwt = require('jsonwebtoken');

const checkPayload = requiredFields => {
  return (req, res, next) => {
    const missingFields = [];
    const invalidFields = [];

    for (const field in requiredFields) {
      if (!(field in req.body)) {
        missingFields.push(field);
      } else if (
        typeof req.body[field] !== requiredFields[field] ||
        !req.body[field].trim()
      ) {
        invalidFields.push(field);
      }
    }

    if (missingFields.length > 0 || invalidFields.length > 0) {
      const errorMessage = [];
      if (missingFields.length > 0) {
        errorMessage.push(
          `Missing required fields: ${missingFields.join(', ')}`
        );
      }
      if (invalidFields.length > 0) {
        errorMessage.push(`Invalid fields: ${invalidFields.join(', ')}`);
      }
      return res.status(400).json({ error: errorMessage.join('. ') });
    }

    next();
  };
};

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error();
    }

    const user = await db.user.findOne({ where: { sessionToken: token } });

    if (!user) {
      throw new Error();
    }

    jwt.verify(token, process.env.AUTH_SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new Error();
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Error verifying authentication token:', error);
    return res.status(401).json({
      error: 'Authentication failed. Please login again to continue.',
    });
  }
};

module.exports = {
  checkPayload,
  checkAuth,
};
